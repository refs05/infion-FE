import threeDots from "../../assets/img/threeDots.svg";
import userImg from "../../assets/img/userImg.svg";
import like from "../../assets/img/love.svg";
import comment from "../../assets/img/comment.svg";
import liked from "../../assets/img/liked.svg";
import SubComments from "./subComment";
import CreateReply from "./createReply";
import { useState } from "react";
import "./commentDetail.css";

const Comments = ({ data }) => {
    const [subComment, setSubComment] = useState(false);
    const [editComment, setEditComment] = useState(false);

    return (
        <>
            <div className="border rounded-3 mb-3 px-2">
                <div className="d-flex align-items-center bd-highlight mb-1">
                    <div className="p-2 bd-highlight">
                        <img src={userImg} className="rounded-circle" alt="profile" style={{ width: "55px" }} />
                    </div>
                    <div className="p-2 bd-highlight">{data.username}</div>
                    <div className="ms-auto p-2 bd-highlight">
                        <div className="ms-auto p-2 bd-highlight d-flex justify-content-end">
                            {data.updated_at == data.created_at ? (
                                ""
                            ) : (
                                <div className="me-3 fs-8">
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
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                <li>
                                    <a className="dropdown-item" onClick={() => setEditComment(true)}>
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
                        <div className="ms-auto p-2 bd-highlight fs-8">
                            {data.updated_at == data.created_at ? new Date(data.created_at).toDateString() : new Date(data.updated_at).toDateString()}
                        </div>
                    </div>
                </div>
                {editComment ? (
                    <div className="col-13 mb-2">
                        <div className="d-flex bd-highlight mb-1 align-items-center">
                            <textarea className="ms-2 rounded-3 p-2 form-control me-3 text-white bg-dark" placeholder="Type something..."></textarea>
                        </div>
                        <div className="d-flex justify-content-end me-3">
                            <div className="send me-4" type="button" onClick={() => setEditComment(false)}>
                                Cancel
                            </div>
                            <div className="send" type="button">
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
                                    <img src={liked} alt="" className="me-2 likeCom" type="button" />
                                ) : (
                                    <img src={like} alt="" className="me-2 likeCom" type="button" />
                                )}
                                {data.like_count}
                            </div>
                            <div className="m-2 bd-highlight d-flex bd-highlight mb-1 align-items-center">
                                <img src={comment} alt="" className="me-2 likeCom" />
                                {data?.replies?.length}
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
