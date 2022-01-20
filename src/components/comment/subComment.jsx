import threeDots from "../../assets/img/threeDots.svg";
import userImg from "../../assets/img/userImg.svg";
import like from "../../assets/img/love.svg";
import liked from "../../assets/img/liked.svg";
import { useState } from "react";
import "./subComment.css";
import { useEffect } from "react";
import axios from "axios";

const SubComments = ({ data }) => {
    const [editComment, setEditComment] = useState(false);

    const [likeReplies, setLikeReplies] = useState({
        user_id: 2,
        reply_id: 0,
    });

    useEffect(() => {
        if(likeReplies.reply_id != 0) {
            axios
                .post(`http://localhost:8000/likeReplies/create`, likeReplies)
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
                user_id: 2,
                reply_id: parseInt(e.target.id),
            })
            e.preventDefault();       
    }
    return (
        <div className="col-11">
            <div className="d-flex bd-highlight mb-1 align-items-center">
                <div className="p-2 bd-highlight profile">
                    <img src={userImg} className="rounded-circle" alt="profile" />
                </div>
                <div className="p-2 bd-highlight">{data.username}</div>
                <div className="ms-auto p-2 bd-highlight">
                    <div className="p-2 d-flex justify-content-end">
                        {data.updated_at == data.created_at ? (
                            ""
                        ) : (
                            <div className="me-3 fs-8">
                                <em>edited</em>
                            </div>
                        )}
                        <img src={threeDots} alt="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" />
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li>
                                <a className="dropdown-item" href="#" onClick={() => setEditComment(true)}>
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
                        <p>{data.reply}</p>
                    </div>
                    <div className="d-flex bd-highlight mb-1">
                        <div className="m-2 bd-highlight d-flex bd-highlight mb-1 align-items-center">
                            {data.likeStatus ? (
                                <img src={liked} alt="" className="me-2 likeCom" type="button" id={data.id} onClick={handleLikeReplies}/>
                            ) : (
                                <img src={like} alt="" className="me-2 likeCom" type="button" id={data.id} onClick={handleLikeReplies}/>
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
