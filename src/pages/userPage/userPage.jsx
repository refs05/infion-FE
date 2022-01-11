import Footer from "../../components/footer/footer";
import { Header, HeaderLogged } from "../../components/header/header";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./userPage.css";
import { useParams } from "react-router-dom";

const DetailPage = () => {
    let { id } = useParams();

    // let { firstword } = useParams();
    // let id = firstword.split("-")[0];
    // console.log(id);

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data: response } = await axios.get(
                    `http://localhost:8000/user/${id}`
                );
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    const changeEdit = () => {
        setEdit(!edit);
    };

    return (
        <div>
            <Header />
            <div className="d-flex justify-content-center fs-4">
                Your <span className="yellow ms-2">Profile</span>
            </div>
            <div className="row container m-auto">
                <div className="col-2 d-flex flex-column align-items-center">
                    {data?.data?.url_img}
                    {data?.data?.username}
                    {edit ? (
                        <div className="">
                            Component edit
                            <button onClick={changeEdit}>Cancel</button>
                        </div>
                    ) : (
                        <button onClick={changeEdit}>Edit Profile</button>
                    )}
                </div>
                <div className="col-10">
                    <div className="row d-flex justify-content-evenly">
                        <div className="border rounded-3 p-2 mt-4 d-none d-sm-block col-5">
                            <div className="title border rounded-3 box-title px-1 ms-3">
                                Account
                            </div>
                            <div className="row mt-2">
                                <div className="col d-flex justify-content-center">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-center">
                                            Follower
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            {data?.data?.follower_count}
                                        </div>
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-center">
                                            Like
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            {data?.data?.like_count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-3 p-2 mt-4 d-none d-sm-block col-5">
                            <div className="title border rounded-3 box-title px-1 ms-3">
                                Thread
                            </div>
                            <div className="row mt-2">
                                <div className="col d-flex justify-content-center">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-center">
                                            Follower
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            {data?.data?.thread_follower_count}
                                        </div>
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-center">
                                            Following
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            {data?.data?.thread_following_count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-evenly">
                        <div className="border rounded-3 p-2 mt-4 d-none d-sm-block col-5">
                            <div className="title border rounded-3 box-title px-1 ms-3">
                                Thread
                            </div>
                            <div className="row mt-2">
                                <div className="col d-flex justify-content-center">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-center">
                                            Your Thread
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            {data?.data?.thread_count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col d-flex justify-content-center">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-center">
                                            Like
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            {data?.data?.thread_like_count}
                                        </div>
                                    </div>
                                </div>
                                <div className="col d-flex justify-content-center">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-center">
                                            Comment
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            {data?.data?.thread_comment_count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border rounded-3 p-2 mt-4 d-none d-sm-block col-5">
                            <div className="title border rounded-3 box-title px-1 ms-3">
                                Rank
                            </div>
                            <div className="row mt-2">
                                <div className="col d-flex justify-content-center">
                                    <div className="d-flex flex-column">
                                        <div className="d-flex justify-content-center">
                                            Your Rank
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            {data?.data?.rank}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailPage;
