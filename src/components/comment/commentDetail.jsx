import threeDots from "../../assets/img/threeDots.svg";
import userImg from "../../assets/img/userImg.svg";
import like from "../../assets/img/love.svg";
import comment from "../../assets/img/comment.svg";
import liked from "../../assets/img/liked.svg";
import SubComments from "./subComment";
import CreateComments from "./createComment";
import { useState } from "react";

const Comments = ({ data }) => {
  console.log(data);
  const [subComment, setSubComment] = useState(false);
  const [editComment, setEditComment] = useState(false);
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
              {data.updated_at == null ? (
                ""
              ) : (
                <div className="me-3" style={{fontSize: "14px"}}>
                  <em>edited</em>
                </div>
              )}
              <img
                src={threeDots}
                alt="threeDots"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => setEditComment(true)}
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Delete
                  </a>
                </li>
              </ul>
            </div>
            <div className="ms-auto p-2 bd-highlight" style={{fontSize: "14px"}}>
              {data.updated_at == null ? data.created_at : data.updated_at}
            </div>
          </div>
        </div>
        {editComment ? (
          <div className="col-13 mb-2">
            <div className="d-flex bd-highlight mb-1 align-items-center">
              <textarea
                className="ms-2 rounded-3 p-2 form-control me-3 text-white bg-dark"
                placeholder="Type something..."
              ></textarea>
            </div>
            <div className="d-flex justify-content-end me-3">
              <div
                className="send me-4"
                type="button"
                onClick={() => setEditComment(false)}
              >
                Cancel
              </div>
              <div className="send" type="button">
                Send
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="ms-3" style={{fontSize: "15px"}}>
              <p>{data.content}</p>
            </div>
            <div className="d-flex bd-highlight mb-1">
              <div className="m-2 bd-highlight d-flex bd-highlight mb-1 align-items-center">
                {data.likeStatus ? (
                  <img
                    src={liked}
                    alt=""
                    className="me-2"
                    type="button"
                    style={{ width: "26px" }}
                  />
                ) : (
                  <img
                    src={like}
                    alt=""
                    className="me-2"
                    type="button"
                    style={{ width: "26px" }}
                  />
                )}
                {data.like}
              </div>
              <div className="m-2 bd-highlight d-flex bd-highlight mb-1 align-items-center">
                <img
                  src={comment}
                  alt=""
                  className="me-2"
                  style={{ width: "26px" }}
                />
                {data.subComment.length}
              </div>
              <div
                type="button"
                className="ms-auto me-3 bd-highlight d-flex align-items-center"
                onClick={() => setSubComment(!subComment)}
              >
                Reply
              </div>
            </div>
          </>
        )}

        <div className="d-flex justify-content-end">
          {data.subComment.map((item, index) => (
            <SubComments data={item} key={index} />
          ))}
        </div>
        {subComment ? (
          <div className="d-flex justify-content-end">
            <CreateComments />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Comments;
