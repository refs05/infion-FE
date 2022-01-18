import Comments from "./commentDetail"
import userImg from '../../assets/img/userImg.svg'
import './listComment.css'
import axios from 'axios';
import { useState } from 'react';

const ListComment = (props)=> {

    const [values, setValues] = useState({
        user_id: 2,
        thread_id: 2,
        comment: '',
        like_count: 0,
        reply_count: 0
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8000/comments/create`, values)
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        }) 
    };

    const handleChange = e => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    console.log(values.comment)

    return (
        <>
            {props.data?.data?.map((item, index) => <Comments data={item} key={index}/>)}
            <form>
                <div className="container-sm border rounded-3">
                    <div className="d-flex bd-highlight mb-1 align-items-center mt-2">
                        <div className="p-2 bd-highlight profile">
                            <img src={userImg} className="rounded-circle" alt="profile"/>
                        </div>
                        <textarea className="ms-2 rounded-3 p-2 form-control me-3 text-white bg-dark" placeholder="Type Your Comment Here..."
                        onChange={handleChange}
                        value={values.comment}
                        type="text"
                        name="comment"
                        required
                        />
                    </div>
                    <div className="d-flex justify-content-end me-3 mb-2">
                        <div className="send px-4 py-1 rounded-3 mb-2" type="submit" onClick={handleSubmit}>Post</div>
                    </div>
                </div> 
            </form>
        </>
    )
}

export default ListComment