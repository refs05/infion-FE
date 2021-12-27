import threeDots from '../../assets/img/threeDots.svg'
import userImg from '../../assets/img/userImg.svg'
import like from '../../assets/img/Love.svg'
import liked from '../../assets/img/liked.svg'
import { useState } from 'react'

const SubComments = ({data})=> {
    const [editComment, setEditComment] = useState(false)
    return (
        <div className="col-11">
            <div className="d-flex bd-highlight mb-1 align-items-center">
                <div className="p-2 bd-highlight">
                    <img src={userImg} className="rounded-circle" alt="profile" style={{width: "55px"}}/>
                </div>
                <div className="p-2 bd-highlight">
                    {data.username}
                </div>
                <div className="ms-auto p-2 bd-highlight">
                    <div className="p-2 d-flex justify-content-end">
                        {data.updated_at == null ? "" : <div className="me-3"><em>edited</em></div>}
                        <img src={threeDots} alt="" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"/>
                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                            <li><a className="dropdown-item" href="#" onClick={()=> setEditComment(true)}>Edit</a></li>
                            <li><a className="dropdown-item" href="#">Delete</a></li>
                        </ul>
                    </div>
                    <div className="ms-auto p-2 bd-highlight">{data.updated_at == null ? data.created_at : data.updated_at}</div>
                </div>
            </div>
            {editComment ? 
                    <div className="col-13 mb-2">
                        <div className="d-flex bd-highlight mb-1 align-items-center">
                            <textarea className="ms-2 rounded-3 p-2 form-control me-3 text-white bg-dark" placeholder="Type something...">
                            </textarea>
                        </div>
                        <div className="d-flex justify-content-end me-3">
                            <div className="send me-4" type="button" onClick={()=> setEditComment(false)}>Cancel</div>
                            <div className="send" type="button">Send</div>
                        </div>
                    </div> 
                :
                <>
                    <div className="ms-3">
                        <p>{data.content}</p>
                    </div>
                    <div className="d-flex bd-highlight mb-1">
                        <div className="m-2 bd-highlight d-flex bd-highlight mb-1 align-items-center">
                            {data.likeStatus ? <img src={liked} alt="" className="me-2" type="button" style={{width: "26px"}}/> : <img src={like} alt="" className="me-2" type="button" style={{width: "26px"}}/>}
                            {data.like}
                        </div>
                    </div>
                </>
                }
        </div>
    )
}

export default SubComments