import threadUser from "../../assets/img/threadUser.svg";
import likeUser from "../../assets/img/likeUser.svg";
import followerUser from "../../assets/img/followerUser.svg";
import React from "react";
import "./leaderboard.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Leaderboard = () => {
  const [loading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/user/leaderboard/`
        );
        setLeaderboard(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="border rounded-3 p-2">
      <div className="d-flex justify-content-center fs-6 mb-1">Leaderboard</div>
      {leaderboard?.data?.slice(0, 5).map((item, index) => (
        <React.Fragment key={index}>
          <div className="fs-8">
            {index + 1}. {item.username}
          </div>
          <div className="d-flex ms-3">
            <div className="d-flex align-items-center me-3 icon fs-8">
              <img src={threadUser} alt="thread" className="me-1" />
              {item.thread_count}
            </div>
            <div className="d-flex align-items-center me-3 icon fs-8">
              <img src={likeUser} alt="like" className="me-0" />
              {item.like_count}
            </div>
            <div className="d-flex align-items-center icon fs-8">
              <img src={followerUser} alt="follower" className="me-1" />
              {item.follower_count}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Leaderboard;
