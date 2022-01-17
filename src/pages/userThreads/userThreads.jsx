import { Header, HeaderLogged } from "../../components/header/header"
import Footer from "../../components/footer/footer";
import './userThreads.css'
import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import like from "../../assets/img/love.svg";
import comment from "../../assets/img/comment.svg";

const UserThreads = ()=> {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const id = 2;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
              const {data: response} = await axios.get(`http://localhost:8000/threads/listbyuser/${id}`);
              setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <>
            <HeaderLogged />
            <div className="container sectionHeight">
                    <div className="bag mb-4">
                        <div className="head d-flex justify-content-center align-items-end mb-1 px-2">
                            <div className="title fs-5">Your Threads</div>
                        </div>
                        <div class="card-group">
                            {data?.data?.slice(0, 5).map((item, index) => (
                                <div class="card bg-transparent p-2 border-0" key={index}>
                                    <Link to={`/forum/${item.id}-${item.title.toLowerCase().replace(/\s/g, "-")}`} className="link">
                                    <img src={item.img} alt="..." className="card-img-top adjust mb-1"/>
                                    <div className="wrapText my-2 fs-6">
                                        {item.title.length >= 68 ? item.title.slice(0, 68)+"...." : item.title}
                                    </div>
                                    </Link>

                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <div className="like d-flex align-items-center me-3">
                                                <img src={like} alt="" />
                                                {item.like_count}
                                            </div>
                                            <div className="comment d-flex align-items-center">
                                                <img src={comment} alt="" />
                                                {item.comment_count}
                                            </div>
                                        </div>
                                        <div className="follow d-flex align-items-center">Follow</div>
                                    </div>
                                    <p class="card-text text-end">
                                        <small class="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
            <Footer />
        </>
    )
}

export default UserThreads