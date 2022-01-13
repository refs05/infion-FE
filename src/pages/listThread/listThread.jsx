import Footer from "../../components/footer/footer";
import { Header, HeaderLogged } from "../../components/header/header";
import Leaderboard from "../../components/leaderboard/leaderboard";
import orderBullet from "../../assets/img/bulletFilter.svg";
import like from "../../assets/img/love.svg";
import comment from "../../assets/img/comment.svg";
import "./listThread.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

//mockRank
import { mockRank } from "../../mockData/mockRankUser";

//dummyData
import { Link } from "react-router-dom";
import Search from "../../components/search/search";

const ListThread = (props) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
              const {data: response} = await axios.get(`http://localhost:8000/threads/list/`);
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
            <Header />
            <Search data={data} />
            <div className="container m-auto row">
                <div className="leftContent col-sm-2">
                    <div className="filter border rounded-3 p-3 mb-4">
                        <div className="title d-flex justify-content-center mb-1">Filter</div>
                        <div className="content">
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                    None
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Oldestt
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                <label className="form-check-label" for="flexRadioDefault3">
                                    Newest
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                <label className="form-check-label" for="flexRadioDefault4">
                                    Top Threads
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                <label className="form-check-label" for="flexRadioDefault5">
                                    By Like
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault6" />
                                <label className="form-check-label" for="flexRadioDefault6">
                                    By Comment
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefault" id="flexRadioDefault7" />
                                <label className="form-check-label" for="flexRadioDefault7">
                                    By Follower
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="category border rounded-3 p-3">
                        <div className="title d-flex justify-content-center mb-1">Category</div>
                        <div className="content">
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefaults" id="flexRadioDefault17" checked/>
                                <label className="form-check-label" for="flexRadioDefault17" >
                                    None
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefaults" id="flexRadioDefault9" />
                                <label className="form-check-label" for="flexRadioDefault9">
                                    Health
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefaults" id="flexRadioDefault10" />
                                <label className="form-check-label" for="flexRadioDefault10">
                                    Science
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefaults" id="flexRadioDefault11" />
                                <label className="form-check-label" for="flexRadioDefault11">
                                    Technology
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefaults" id="flexRadioDefault12" />
                                <label className="form-check-label" for="flexRadioDefault12">
                                    Lifestyle
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefaults" id="flexRadioDefault13" />
                                <label className="form-check-label" for="flexRadioDefault13">
                                    Game
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefaults" id="flexRadioDefault14" />
                                <label className="form-check-label" for="flexRadioDefault14">
                                    Sport
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefaults" id="flexRadioDefault15" />
                                <label className="form-check-label" for="flexRadioDefault15">
                                    Food
                                </label>
                            </div>
                            <div className="mb-1 form-check">
                                <input className="form-check-input me-2" type="radio" name="flexRadioDefaults" id="flexRadioDefault16" />
                                <label className="form-check-label" for="flexRadioDefault16">
                                    Music
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainContent col-sm-7">
                    <div className="bag mb-4">
                        <div className="head d-flex justify-content-between align-items-end mb-1 px-2">
                            <div className="title fs-5">Top Threads</div>
                            <div className="viewmore">View more...</div>
                        </div>
                        <div class="card-group">
                            {data?.data?.map((item, index) => (
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
                    <div className="bag mb-4">
                        <div className="head d-flex justify-content-between align-items-end mb-1 px-2">
                            <div className="title fs-5">Newest Threads</div>
                            <div className="viewmore">View more...</div>
                        </div>
                        <div class="card-group">
                            {data?.data?.map((item, index) => (
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
                    <div className="bag mb-4">
                        <div className="head d-flex justify-content-between align-items-end mb-1 px-2">
                            <div className="title fs-5">Recommendation Threads</div>
                            <div className="viewmore">View more...</div>
                        </div>
                        <div class="card-group">
                            {data?.data?.map((item, index) => (
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
                <div className="rightContent col-sm-3">
                    <Leaderboard data={mockRank} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ListThread;
