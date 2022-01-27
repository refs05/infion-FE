import threeDots from "../../assets/img/threeDots.svg";
import userImg from "../../assets/img/userImg.svg";
import like from "../../assets/img/love.svg";
import comment from "../../assets/img/comment.svg";
import liked from "../../assets/img/liked.svg";
import SubComments from "./subComment";
import CreateReply from "./createReply";
import { useEffect, useState } from "react";
import "./commentDetail.css";
import axios from "axios";
import { useCookies } from "react-cookie";

const Comments = ({ data }) => {
  const [subComment, setSubComment] = useState(false);
  const [editComment, setEditComment] = useState(false);
  const [cookies, setCookies] = useCookies(["id", "token"]);
  const config = {
    headers: { Authorization: `Bearer ${cookies.token}` },
  };

  console.log(data);

  const [likeComments, setLikeComments] = useState({
    user_id: 0,
    comment_id: 0,
  });

  const [values, setValues] = useState({
    user_id: parseInt(cookies.id),
    thread_id: parseInt(data?.thread_id),
    comment: "",
  });

  const handleEdit = async (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/comments/${data?.id}`, values, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setEditComment(false);
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:8000/comments/${data?.id}`, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (likeComments.comment_id != 0) {
      axios
        .post(`http://localhost:8000/likeComments/create`, likeComments, config)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [likeComments.comment_id]);

  const handleLikeComments = async (e) => {
    setLikeComments({
      user_id: parseInt(cookies.id),
      comment_id: parseInt(e.target.id),
    });
    e.preventDefault();
  };

  console.log(cookies.id);
  return (
    <>
      <div className="border rounded-3 mb-3 px-2">
        <div className="d-flex align-items-center bd-highlight mb-1">
          <div className="p-2 bd-highlight">
            <img
              src={userImg}
              className="rounded-circle"
              alt="profile"
              style={{ width: "55px" }}
            />
          </div>
          <div className="p-2 bd-highlight">{data.username}</div>
          <div className="ms-auto p-2 bd-highlight">
            <div className="ms-auto p-2 bd-highlight d-flex justify-content-end">
              {cookies.id != data?.user_id ? (
                ""
              ) : (
                <img
                  src={threeDots}
                  alt="threeDots"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
              )}
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => setEditComment(true)}
                    type="button"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={handleDelete}
                    type="button"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
            <div className="ms-auto p-2 bd-highlight fs-8">
              {data.updated_at == data.created_at
                ? new Date(data.created_at).toDateString()
                : new Date(data.updated_at).toDateString()}
            </div>
          </div>
        </div>
        {editComment ? (
          <div className="col-13 mb-2">
            <div className="d-flex bd-highlight mb-1 align-items-center">
              <textarea
                className="ms-2 rounded-3 p-2 form-control me-3 text-white bg-dark"
                placeholder="Type something..."
                onChange={handleChange}
                name="comment"
              ></textarea>
            </div>
            <div className="d-flex justify-content-end me-3 mt-2">
              <div
                className="send me-4 px-4 py-1 rounded-3"
                type="button"
                onClick={() => setEditComment(false)}
              >
                Cancel
              </div>
              <div
                className="send px-4 py-1 rounded-3"
                type="button"
                onClick={handleEdit}
              >
                Send
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="ms-3 fs-7">
              <p>{data.comment}</p>
            </div>
            <div className="d-flex bd-highlight mb-1">
              <div className="m-2 bd-highlight d-flex bd-highlight mb-1 align-items-center">
                {data.likeStatus ? (
                  <img
                    src={liked}
                    alt=""
                    className="me-2 likeCom"
                    type="button"
                    id={data.id}
                    onClick={handleLikeComments}
                  />
                ) : (
                  <img
                    src={like}
                    alt=""
                    className="me-2 likeCom"
                    type="button"
                    id={data.id}
                    onClick={handleLikeComments}
                  />
                )}
                {data.like_count}
              </div>
              <div className="m-2 bd-highlight d-flex bd-highlight mb-1 align-items-center">
                <img src={comment} alt="" className="me-2 likeCom" />
                {data?.reply_count}
              </div>
              <div
                type="button"
                className="ms-auto me-3 bd-highlight d-flex align-items-center"
                onClick={() => setSubComment(!subComment)}
              >
                <a className="clearLink" href="#reply">
                  Reply
                </a>
              </div>
            </div>
          </>
        )}

        <div className="d-flex flex-column align-items-end">
          {data?.replies?.map((item, index) => (
            <SubComments data={item} key={index} />
          ))}
        </div>
        {subComment ? (
          <div className="d-flex justify-content-end">
            <CreateReply data={data?.id} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Comments;
