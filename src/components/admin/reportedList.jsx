import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ReactPaginate from "react-paginate"
import { Link } from "react-router-dom"

const ReportedList = ()=> {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [detail, setDetail] = useState([{
        id : 0,
        reporter: '',
        threadId: 0,
        threadTitle: '',
        message: ''
    }])
    const [status, setStatus] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const [pageNumber, setPageNumber] = useState(0);

    const usersPerPage = 10;
    const pageCount = Math.ceil(data?.length / usersPerPage);
    const pagesVisited = pageNumber * usersPerPage;

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(`http://localhost:8000/reports/list`);
                setData(response.data);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
        
    }, []);

    const sendDetail = (detail)=> {
        return function () {
            setDetail({
                id : detail.id,
                reporter : detail.reporter,
                threadId : detail.thread_id,
                threadTitle : detail.title,
                message : detail.report_message
            })
        }
    }

    const deleteThread = () => {
        // DELETE request using axios with error handling
        axios.delete(`http://localhost:8000/threads/${detail.threadId}`)
            .then(response => setStatus('Delete successful'))
            .catch(error => {
                setErrorMessage(error.message);
                console.error('There was an error!', error);
            });
    }

    const deleteReport = () => {
        // DELETE request using axios with error handling
        axios.delete(`http://localhost:8000/reports/${detail.id}`)
            .then(response => setStatus('Delete successful'))
            .catch(error => {
                setErrorMessage(error.message);
                console.error('There was an error!', error);
            });
    }

    const displayReports = data?.slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user, index) => {
            function timeSince(datetime) {
                var now = new Date(),
                    secondsPast = (now.getTime() - Date.parse(datetime)) / 1000;

                if (secondsPast < 60) {
                    return Math.round(secondsPast) + " seconds ago";
                }
                if (secondsPast < 3600) {
                    return parseInt(secondsPast / 60) + " mins ago";
                }
                if (secondsPast <= 86400) {
                    return parseInt(secondsPast / 3600) + " hours ago";
                }
                if (secondsPast <= 2628000) {
                    return parseInt(secondsPast / 86400) + " days ago";
                }
                if (secondsPast <= 31536000) {
                    return parseInt(secondsPast / 2628000) + " months ago";
                }
                if (secondsPast > 31536000) {
                    return parseInt(secondsPast / 31536000) + " years ago";
                }
            }
        return (
            <div className="d-flex justify-content-center mx-5 reported mb-1" type="button" onClick={sendDetail(user)} key={index}>
                <div className="list d-flex w-100 px-2">
                    <div className="col-2">
                        {user.reporter}
                    </div>
                    <div className="col-8">
                        {user.report_message}
                    </div>
                    <div className="col-2">
                        {timeSince(user.created_at)}
                    </div>
                </div>
            </div>
        );
        });
    return (
        <div className="col-sm-10 container">
            <div className="title mt-5 d-flex justify-content-center fs-3">Report List</div>
            <div className="search"></div>
            <div className="d-flex justify-content-center mx-5 border-bottom mb-2">
                <div className="list d-flex w-100 px-2">
                    <div className="col-2">
                        Reporter
                    </div>
                    <div className="col-8">
                        Message
                    </div>
                    <div className="col-2">
                        Date
                    </div>
                    </div>
                </div>
                {displayReports}

                <div className="slide d-flex justify-content-center mt-3">
                    <ReactPaginate 
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                    />
                </div>

                <div className="d-flex justify-content-center mx-5 border-bottom mb-2">
                    <div className="list d-flex w-100 px-2">
                        <div className="col-2">
                            Detail Report
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center mx-5 mb-1">
                    <div className="list d-flex w-100 px-2">
                        <div className="col-2">
                        Reporter
                        </div>
                        <div className="col">
                        : {detail.reporter}
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-5 mb-1">
                    <div className="list d-flex w-100 px-2">
                        <div className="col-2">
                        ThreadID
                        </div>
                        <div className="col">
                        : {detail.threadId}
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-5 mb-1">
                    <div className="list d-flex w-100 px-2">
                        <div className="col-2">
                        Thread Title
                        </div>
                        <div className="col">
                        : {detail.threadTitle}
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mx-5 mb-5">
                    <div className="list d-flex w-100 px-2">
                        <div className="col-2">
                        Message
                        </div>
                        <div className="col">
                        : {detail.message}
                        </div>
                    </div>
                </div>
                <div className="tombol d-flex justify-content-end mx-5 mb-1">
                    <div className="px-2 d-flex justify-content-end">
                        <div className="view btn btn-primary me-2">
                        <Link to={`/forum/${detail.threadId}-${detail.threadTitle?.toLowerCase().replace(/\s/g, "-")}`} className="linkThread">
                            View Thread
                        </Link>
                    </div>
                    <div className="delete btn btn-danger me-2" onClick={deleteThread}>Delete Thread</div>
                    <div className="reject btn btn-warning text-white" onClick={deleteReport}>Reject Report</div>
                </div>
            </div>
        </div>
    )
}

export default ReportedList