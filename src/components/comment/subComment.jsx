import threeDots from "../../assets/img/threeDots.svg";
import like from "../../assets/img/love.svg";
import liked from "../../assets/img/liked.svg";
import { useState } from "react";
import "./subComment.css";
import { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const SubComments = ({ data }) => {
  const [editComment, setEditComment] = useState(false);
  const [cookies, setCookies] = useCookies(["id", "token"]);
  const config = {
    headers: { Authorization: `Bearer ${cookies.token}` },
  };

  const [likeReplies, setLikeReplies] = useState({
    user_id: 0,
    reply_id: 0,
  });

  const [values, setValues] = useState({
    user_id: parseInt(cookies.id),
    comment_id: data?.comment_id,
    reply: "",
  });

  const handleEdit = async (e) => {
    e.preventDefault();

    axios
      .put(`http://174.129.54.139:8000/replies/${data?.id}`, values, config)
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
      .delete(`http://174.129.54.139:8000/replies/${data?.id}`, config)
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
    if (likeReplies.reply_id != 0) {
      axios
        .post(
          `http://174.129.54.139:8000/likeReplies/create`,
          likeReplies,
          config
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [likeReplies.reply_id]);

  const handleLikeReplies = async (e) => {
    setLikeReplies({
      user_id: parseInt(cookies.id),
      reply_id: parseInt(e.target.id),
    });
    e.preventDefault();
  };

  console.log(data);
  return (
    <div className="col-11">
      <div className="d-flex bd-highlight mb-1 align-items-center">
        <div className="p-2 bd-highlight profile">
          <img
            src={data.url_img}
            className="rounded-circle"
            alt="profile-img"
          />
        </div>
        <div className="p-2 bd-highlight">{data.username}</div>
        <div className="ms-auto p-2 bd-highlight">
          <div className="p-2 d-flex justify-content-end">
            {cookies.id != data?.user_id ? (
              ""
            ) : (
              <img
                src={threeDots}
                alt=""
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
              name="reply"
              onChange={handleChange}
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
            <p>{data.reply}</p>
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
                  onClick={handleLikeReplies}
                />
              ) : (
                <img
                  src={like}
                  alt=""
                  className="me-2 likeCom"
                  type="button"
                  id={data.id}
                  onClick={handleLikeReplies}
                />
              )}
              {data.like_count}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SubComments;
