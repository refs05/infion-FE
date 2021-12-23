import commentUser from '../../assets/img/commentUser.svg'
import likeUser from '../../assets/img/likeUser.svg'
import followerUser from '../../assets/img/followerUser.svg'

const Leaderboard = ({data}) => {
    return (
        <div className="leaderboard border border-white rounded p-1 mt-3">
            <div className="title d-flex justify-content-center fs-5">Leaderboard</div>
            {data.map((item, index)=> (
                <>
                    <div className="name">{index+1}. {item.username}</div>
                    <div className="info d-flex ms-3">
                        <div className="comment d-flex align-items-center me-2">
                            <img src={commentUser} alt="" />{item.comment}
                        </div>
                        <div className="like d-flex align-items-center me-2">
                            <img src={likeUser} alt="" />{item.like}
                        </div>
                        <div className="follower d-flex align-items-center me-2">
                            <img src={followerUser} alt="" />{item.follower}
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Leaderboard