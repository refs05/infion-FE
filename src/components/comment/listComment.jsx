import Comments from "./commentDetail"
import { mockComment } from "../../mockData/mockComment"
import userImg from '../../assets/img/userImg.svg'
import './listComment.css'

const ListComment = ()=> {
    return (
        <>
            {mockComment.map((item, index) => <Comments data={item} key={index}/>)}
            <div className="container-sm border rounded-3">
                <div className="d-flex bd-highlight mb-1 align-items-center mt-2">
                    <div className="p-2 bd-highlight profile">
                        <img src={userImg} className="rounded-circle" alt="profile"/>
                    </div>
                    <textarea className="ms-2 rounded-3 p-2 form-control me-3 text-white bg-dark" placeholder="Type Your Comment Here...">
                    </textarea>
                </div>
                <div className="d-flex justify-content-end me-3 mb-2">
                    <div className="send" type="button">Send</div>
                </div>
            </div> 
        </>
    )
}

export default ListComment