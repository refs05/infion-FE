import commentUser from '../../assets/img/commentUser.svg'
import likeUser from '../../assets/img/likeUser.svg'
import followerUser from '../../assets/img/followerUser.svg'
import React from 'react'

const Leaderboard = ({data}) => {
    return (
        <div className="leaderboard border rounded-3 p-1 mt-3">
            <div className="title d-flex justify-content-center fs-6">Leaderboard</div>
            {data.map((item, index)=> (
                <React.Fragment key={index}>
                    <div className="name" style={{fontSize: "14px"}}>{index+1}. {item.username}</div>
                    <div className="info d-flex ms-3">
                        <div className="comment d-flex align-items-center me-3" style={{fontSize: "14px"}}>
                            <img src={commentUser} alt="" style={{width: "15px"}}/>{item.comment}
                        </div>
                        <div className="like d-flex align-items-center me-3">
                            <img src={likeUser} alt="" style={{width: "15px"}}/>{item.like}
                        </div>
                        <div className="follower d-flex align-items-center">
                            <img src={followerUser} alt="" style={{width: "15px"}}/>{item.follower}
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default Leaderboard