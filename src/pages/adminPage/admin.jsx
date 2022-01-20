import "./admin.css"
import logo from '../../assets/img/logo.svg'
import logout from '../../assets/img/logout.svg'
import person from '../../assets/img/person.svg'
import left from '../../assets/img/left.svg'
import right from '../../assets/img/right.svg'
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Admin = ()=> {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(`http://localhost:8000/reports/list`);
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    console.log(data)

    return (
        <>
            <div className="d-flex">
                <div className="col-sm-2 sidebar vh-100">
                    <div className="gambar d-flex justify-content-center align-items-center">
                        <img src={logo} alt="logo" />INFION
                    </div>
                    <hr />
                    <div className="profile d-flex flex-column align-items-center mt-5">
                        <img src={person} alt="admin" className="border rounded-circle"/>
                        <div className="name">
                            <p>Admin : Thomas Muller</p>
                        </div>
                    </div> 
                    <div className="wrap mt-2">
                        <div className="nav align-items-center border-bottom">
                        <div className="ms-4">Reported Thread</div>
                        </div>
                        <div className="nav align-items-center border-bottom">
                        <div className="ms-4">Deleted Thread</div>
                        </div>
                        <div className="nav align-items-center border-bottom">
                        <div className="ms-4">Make Announcement</div>
                        </div>
                    </div>
                    <div className="logout position-relative fs-4">
                        <img src={logout} alt="logout" className="me-2"/>Logout
                    </div>
                </div>
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

                    <div className="d-flex justify-content-center mx-5 reported mb-1">
                        <div className="list d-flex w-100 px-2">
                            <div className="col-2">
                            Thomas Muller
                            </div>
                            <div className="col-8">
                            Mengandung konten sensitif
                            </div>
                            <div className="col-2">
                            27-12-2021
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-5 reported mb-1">
                        <div className="list d-flex w-100 px-2">
                            <div className="col-2">
                            Thomas Muller
                            </div>
                            <div className="col-8">
                            Mengandung konten sensitif
                            </div>
                            <div className="col-2">
                            27-12-2021
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-5 reported mb-1">
                        <div className="list d-flex w-100 px-2">
                            <div className="col-2">
                            Thomas Muller
                            </div>
                            <div className="col-8">
                            Mengandung konten sensitif
                            </div>
                            <div className="col-2">
                            27-12-2021
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-5 reported mb-1">
                        <div className="list d-flex w-100 px-2">
                            <div className="col-2">
                            Thomas Muller
                            </div>
                            <div className="col-8">
                            Mengandung konten sensitif
                            </div>
                            <div className="col-2">
                            27-12-2021
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-5 reported mb-1">
                        <div className="list d-flex w-100 px-2">
                            <div className="col-2">
                            Thomas Muller
                            </div>
                            <div className="col-8">
                            Mengandung konten sensitif
                            </div>
                            <div className="col-2">
                            27-12-2021
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-5 reported mb-1">
                        <div className="list d-flex w-100 px-2">
                            <div className="col-2">
                            Thomas Muller
                            </div>
                            <div className="col-8">
                            Mengandung konten sensitif
                            </div>
                            <div className="col-2">
                            27-12-2021
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-5 reported mb-1">
                        <div className="list d-flex w-100 px-2">
                            <div className="col-2">
                            Thomas Muller
                            </div>
                            <div className="col-8">
                            Mengandung konten sensitif
                            </div>
                            <div className="col-2">
                            27-12-2021
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-5 reported mb-1">
                        <div className="list d-flex w-100 px-2">
                            <div className="col-2">
                            Thomas Muller
                            </div>
                            <div className="col-8">
                            Mengandung konten sensitif
                            </div>
                            <div className="col-2">
                            27-12-2021
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-5 reported mb-1">
                        <div className="list d-flex w-100 px-2">
                            <div className="col-2">
                            Thomas Muller
                            </div>
                            <div className="col-8">
                            Mengandung konten sensitif
                            </div>
                            <div className="col-2">
                            27-12-2021
                            </div>
                        </div>
                    </div>
                    <div className="slide d-flex align-items-center justify-content-center mt-3">
                        <div className="arrow">
                            <img src={left} alt="" />
                        </div>
                        <div className="num">
                            10 of 40 
                        </div>
                        <div className="arrow">
                            <img src={right} alt="" />
                        </div>
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
                            : Thomas Muller
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-5 mb-1">
                        <div className="list d-flex w-100 px-2">
                            <div className="col-2">
                            ThreadID
                            </div>
                            <div className="col">
                            : 23
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-5 mb-1">
                        <div className="list d-flex w-100 px-2">
                            <div className="col-2">
                            Thread Title
                            </div>
                            <div className="col">
                            : Kecerdasan buatan, ancaman atau solusi bagi manusia ?
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mx-5 mb-5">
                        <div className="list d-flex w-100 px-2">
                            <div className="col-2">
                            Message
                            </div>
                            <div className="col">
                            : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est lacus, rhoncus sit amet risus nec, bibendum egestas velit. Donec non pellentesque enim, sit amet lobortis felis. In ultrices felis nulla, quis ultricies massa commodo vitae. 
                            </div>
                        </div>
                    </div>
                    <div className="tombol d-flex justify-content-end mx-5 mb-1">
                        <div className="px-2 d-flex justify-content-end">
                            <div className="view btn btn-primary me-2">View Thread</div>
                            <div className="delete btn btn-danger me-2">Delete Thread</div>
                            <div className="reject btn btn-warning text-white">Reject Report</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin