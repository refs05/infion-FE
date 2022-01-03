import commentUser from '../../assets/img/commentUser.svg'
import likeUser from '../../assets/img/likeUser.svg'
import followerUser from '../../assets/img/followerUser.svg'
import React from 'react'
import './leaderboard.css'

const Leaderboard = ({data}) => {
    return (
        <div className="border rounded-3 p-1">
            <div className="d-flex justify-content-center fs-6 mb-1">Leaderboard</div>
            {data.map((item, index)=> (
                <React.Fragment key={index}>
                    <div className="fs-8">{index+1}. {item.username}</div>
                    <div className="d-flex ms-3">
                        <div className="d-flex align-items-center me-3 fs-8 icon">
                            <img src={commentUser} alt=""/>{item.comment}
                        </div>
                        <div className="d-flex align-items-center me-3 icon">
                            <img src={likeUser} alt=""/>{item.like}
                        </div>
                        <div className="d-flex align-items-center icon">
                            <img src={followerUser} alt=""/>{item.follower}
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default Leaderboard