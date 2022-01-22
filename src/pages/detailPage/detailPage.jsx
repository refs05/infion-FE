import ListComment from "../../components/comment/listComment";
import Footer from "../../components/footer/footer";
import { Header, HeaderLogged } from "../../components/header/header";
import back from "../../assets/img/back.svg";
import axios from "axios";
import React, { useEffect, useState } from "react";
import upArrow from "../../assets/img/upArrow.svg";
import bullet from "../../assets/img/bullet.svg";
import "./detailPage.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Leaderboard from "../../components/leaderboard/leaderboard";

//temporary
import likeThread from "../../assets/img/likeThread.svg";
import likedThread from "../../assets/img/likedThread.svg";
import commentThread from "../../assets/img/commentThread.svg";
import followThread from "../../assets/img/followThread.svg";

const DetailPage = () => {
  let { id } = useParams();

  let firstWord = id.split("-")[0];
  let role = "moderator";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [loadingComment, setLoadingComment] = useState(true);
  const [dataComment, setDataComment] = useState([]);

  const [loadingNewest, setLoadingNewest] = useState(true);
  const [dataNewest, setDataNewest] = useState([]);

  const [loadingAlso, setLoadingAlso] = useState(true);
  const [dataAlso, setDataAlso] = useState([]);

  const [followUser, setFollowUser] = useState({
    followed_id: 0,
    follower_id: 0, //dummy
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/threads/${firstWord}`
        );
        setData(response);
        setFollowUser({ followed_id: response.data.user_id, follower_id: 2 });
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingComment(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/comments/listbythread/${firstWord}`
        );
        setDataComment(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoadingComment(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/threads/list/?sortBy=created_at desc`
        );
        setDataNewest(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/threads/list/?sortBy=like_count desc`
        );
        setDataAlso(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const [followThreads, setFollowThreads] = useState({
    user_id: 2,
    thread_id: parseInt(firstWord),
  });

  const [statusLike, setStatusLike] = useState(false);

  useEffect(() => {
    axios
      .post(`http://localhost:8000/likeThreads/${firstWord}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setStatusLike(true);
      });
  }, []);

  const [statusFollow, setStatusFollow] = useState(false);

  useEffect(() => {
    axios
      .post(`http://localhost:8000/followThreads/${firstWord}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setStatusFollow(true);
      });
  }, []);

  const handleFollowThreads = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/followThreads/create`, followThreads)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [likeThreads, setLikeThreads] = useState({
    user_id: 2,
    thread_id: parseInt(firstWord),
  });

  const handleLikeThreads = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/likeThreads/create`, likeThreads)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleFollowUser = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/followUsers/create`, followUser)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [reports, setReports] = useState({
    user_id: 2,
    thread_id: parseInt(firstWord),
    report_message: "",
  });

  const handleChange = (e) => {
    setReports({ ...reports, [e.target.name]: e.target.value });
  };

  const handleReports = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/reports/create`, reports)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const dataDetail = data?.data;

  return (
    <>
      <Header />
      <div className="bg-hitam">
        <div className="d-flex align-items-center back">
          <img src={back} alt="" className="me-1" />
          <div type="button">Back</div>
        </div>
        <div className="container row m-auto">
          <div className="detail col-sm-9">
            <div className="title fs-3 mb-3">{dataDetail?.title}</div>
            <div className="headThread d-flex justify-content-between mb-3">
              <div className="first">
                <div className="date fs-8">
                  {new Date(dataDetail?.created_at).toDateString()}
                </div>
                <div className="follower fs-8">
                  {dataDetail?.follower_count} Followers
                </div>
              </div>
              <div className="second d-flex flex-column align-items-end">
                <div className="creator fs-8">
                  Oleh : {dataDetail?.username}
                </div>
                <div
                  className="follower fs-8"
                  type="button"
                  onClick={handleFollowUser}
                >
                  Follow
                </div>
              </div>
            </div>
            <div className="mb-3 rounded-2">
              <img src={data?.data?.img} alt="" className="img-fluid w-100" />
            </div>
            <div className="d-flex justify-content-between mb-3">
              <div className="action d-flex">
                <div className="ms-2 me-2 info" onClick={handleLikeThreads}>
                  <img
                    src={statusLike ? likedThread : likeThread}
                    alt=""
                    className="img-fluid"
                    type="button"
                  />
                </div>
                <div className="ms-2 me-2 info">
                  <a href="#comment">
                    <img
                      src={commentThread}
                      alt="comment"
                      className="img-fluid"
                      type="button"
                    />
                  </a>
                </div>
                <div
                  className="ms-2 me-2 infoFollow d-flex align-items-center justify-content-center"
                  onClick={handleFollowThreads}
                  type="button"
                >
                  {statusFollow ? "Followed" : "Follow"}
                </div>
              </div>
              <div className="moderator">
                <div
                  className={
                    role == "common"
                      ? `reportHide d-flex align-items-center justify-content-center rounded-circle`
                      : `report d-flex align-items-center justify-content-center rounded-circle`
                  }
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Report
                </div>
                <div
                  class="modal fade textBlack "
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content borderReport">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Report Thread
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="d-flex align-items-center mb-2">
                          <div className="me-4 reportContent">ID Thread</div>
                          <input
                            type="text"
                            className="bg-input rounded-3 px-1"
                            value={reports.thread_id}
                            readOnly
                          />
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <div className="me-4 reportContent">ID Reporter</div>
                          <input
                            type="text"
                            className="bg-input rounded-3 px-1"
                            value={reports.user_id}
                            readOnly
                          />
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <div className="me-4 reportContent">Reporter</div>
                          <input
                            type="text"
                            className="bg-input rounded-3 px-1"
                            value="andi_23"
                            readOnly
                          />
                        </div>
                        <div className="">
                          <div className="me-4">
                            Reason for report this thread
                          </div>
                          <textarea
                            name="report_message"
                            onChange={handleChange}
                            id=""
                            cols="55"
                            rows="4"
                            className="rounded-3 px-1"
                          ></textarea>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary bg-send"
                          onClick={handleReports}
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">{dataDetail?.content}</div>
            <div className="titleComment fs-4" id="comment">
              Comment
            </div>
            <ListComment data={dataComment} thread_id={firstWord} />
          </div>
          <div className="sideContent col-sm-3 mt-5">
            <Leaderboard />
            <div className="border rounded-3 p-2 mt-4 d-none d-sm-block">
              <div className="title d-flex justify-content-center fs-6 mb-1">
                Newest
              </div>
              <div className="wrap">
                {dataNewest.data?.slice(0, 5).map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="d-flex align-items-start side">
                      <img className=" me-1" src={bullet} alt="" />
                      <Link
                        to={`/forum/${item.id}-${item.title
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                        className="link"
                      >
                        <div className="fs-8" type="button">
                          {item.title.length >= 68
                            ? item.title.slice(0, 68) + "...."
                            : item.title}
                        </div>
                      </Link>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="border rounded-3 p-2 mt-4">
              <div className="title d-flex justify-content-center fs-6 mb-1">
                See Also
              </div>
              <div className="wrap">
                {dataAlso.data?.slice(0, 5).map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="d-flex align-items-start side">
                      <img className=" me-1" src={bullet} alt="" />
                      <Link
                        to={`/forum/${item.id}-${item.title
                          .toLowerCase()
                          .replace(/\s/g, "-")}`}
                        className="link"
                      >
                        <div className="fs-8" type="button">
                          {item.title.length >= 68
                            ? item.title.slice(0, 68) + "...."
                            : item.title}
                        </div>
                      </Link>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            {/* <div className="toUp border border-white">
                        <img src={upArrow} alt=""/>
                    </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
