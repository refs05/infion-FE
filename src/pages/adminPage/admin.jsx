import "./admin.css"
import logo from '../../assets/img/logo.svg'
import logout from '../../assets/img/logout.svg'
import person from '../../assets/img/person.svg'
import left from '../../assets/img/left.svg'
import right from '../../assets/img/right.svg'
import { useState } from "react"
import ReportedList from "../../components/admin/reportedList"

const Admin = ()=> {
    const [nav, setNav] = useState("reported")
    return (
        <>
            <div className="d-flex">
                <div className="col-sm-2 sidebar vh-100">
                    <div className="gambar d-flex justify-content-center align-items-center">
                        <img src={logo} alt="logo" />INFION
                    </div>
                    <hr />
                    <div className="admin d-flex flex-column align-items-center mt-5">
                        <img src={person} alt="admin" className="border rounded-circle"/>
                        <div className="name">
                            <p>Admin : Thomas Muller</p>
                        </div>
                    </div> 
                    <div className="wrap mt-2">
                        <div className="nav align-items-center border-bottom" type="button">
                            <div className="ms-4">Reported Thread</div>
                        </div>
                        <div className="nav align-items-center border-bottom" type="button">
                            <div className="ms-4">Deleted Thread</div>
                        </div>
                        <div className="nav align-items-center border-bottom" type="button">
                            <div className="ms-4">Make Announcement</div>
                        </div>
                    </div>
                    <div className="logout position-relative fs-4">
                        <img src={logout} alt="logout" className="me-2"/>Logout
                    </div>
                </div>
                <ReportedList />
            </div>  
        </>
    )
}

export default Admin