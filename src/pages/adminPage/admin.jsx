import "./admin.css";
import logo from "../../assets/img/logo.svg";
import logout from "../../assets/img/logout.svg";
import person from "../../assets/img/person.svg";
import left from "../../assets/img/left.svg";
import right from "../../assets/img/right.svg";
import { useState } from "react";
import ReportedList from "../../components/admin/reportedList";
import Announcement from "../../components/admin/announcement";
import YourReport from "../../components/admin/yourReport";
import logo1 from "../../assets/img/logoWithText.svg";
import { Link } from "react-router-dom";

const Admin = () => {
  const [nav, setNav] = useState("reported");

  const changeReported = () => {
    setNav("reported");
  };
  const changeYourReport = () => {
    setNav("yourReport");
  };
  const changeAnnouncement = () => {
    setNav("announcement");
  };
  return (
    <>
      <div className="d-flex">
        <div className="col-sm-2 sidebar vh-100">
          <Link to={`/`} className="link">
            <div className="gambar d-flex justify-content-center align-items-center">
              <img src={logo} alt="logo" />
              INFION
            </div>
          </Link>
          <hr />
          <div className="admin d-flex flex-column align-items-center mt-5">
            <img src={person} alt="admin" className="border rounded-circle" />
            <div className="name mt-3">
              <p>Admin : Thomas Muller</p>
            </div>
          </div>
          <div className="wrap mt-2">
            <div
              className={
                nav == "reported"
                  ? "navActive align-items-center border-bottom d-flex align-items-center"
                  : "nav align-items-center border-bottom"
              }
              type="button"
              onClick={changeReported}
            >
              <div className="ms-4">Reported Thread</div>
            </div>
            <div
              className={
                nav == "yourReport"
                  ? "navActive align-items-center border-bottom d-flex align-items-center"
                  : "nav align-items-center border-bottom"
              }
              type="button"
              onClick={changeYourReport}
            >
              <div className="ms-4">Your Report</div>
            </div>
            <div
              className={
                nav == "announcement"
                  ? "navActive align-items-center border-bottom d-flex align-items-center"
                  : "nav align-items-center border-bottom"
              }
              type="button"
              onClick={changeAnnouncement}
            >
              <div className="ms-4">Make Announcement</div>
            </div>
          </div>
          <div
            className="logout position-relative fs-5"
            data-bs-toggle="modal"
            data-bs-target="#ModalLogout"
            href="#"
            type="button"
          >
            <img src={logout} alt="logout" className="me-2" />
            Logout
          </div>
          <div
            className={`modal fade textBlack `}
            id="ModalLogout"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className={`modal-content mx-auto radius`}>
                <div className="modal-header">
                  <h4
                    className="modal-title mx-auto fw-bolder"
                    id="exampleModalLabel"
                  >
                    Logout
                  </h4>
                </div>
                <div className="modal-body mx-4 d-flex flex-column align-items-center">
                  <div className="mb-3">Are you sure ?</div>
                  <div>
                    <button
                      type="button"
                      className={`btn btn-danger rounded-pill mx-auto me-2`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className={`btn btn-primary rounded-pill mx-auto`}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
                <img className={`mx-auto size mb-3`} src={logo1} alt="" />
              </div>
            </div>
          </div>
        </div>
        {nav == "reported" ? (
          <ReportedList />
        ) : nav == "yourReport" ? (
          <YourReport />
        ) : (
          <Announcement />
        )}
      </div>
    </>
  );
};

export default Admin;
