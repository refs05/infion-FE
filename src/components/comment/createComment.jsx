import userImg from '../../assets/img/userImg.svg'

const CreateComments = ()=> {
    return (
        <div className="col-11 mb-2">
            <div className="d-flex bd-highlight mb-1 align-items-center">
                <div className="p-2 bd-highlight">
                    <img src={userImg} className="rounded-circle" alt="profile"/>
                </div>
                <textarea className="ms-2 rounded-3 p-2 form-control me-3 text-white bg-dark" placeholder="Type something...">
                </textarea>
            </div>
            <div className="d-flex justify-content-end me-3">
                    <div className="send" type="button">Send</div>
            </div>
        </div>
    )
}

export default CreateComments