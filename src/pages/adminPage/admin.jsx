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
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import back from "../../assets/img/back.svg";

const Admin = () => {
  const [navReport, setNavReport] = useState("yourReport");
  const [navAdmin, setNavAdmin] = useState("reported");
  const [cookies, setCookies, removeCookies] = useCookies([
    "role_id",
    "username",
  ]);

  let history = useHistory();

  const changeReported = () => {
    setNavAdmin("reported");
  };
  const changeYourReport = () => {
    setNavAdmin("yourReport");
    setNavReport("yourReport");
  };
  const changeAnnouncement = () => {
    setNavAdmin("announcement");
    setNavReport("announcement");
  };

  const history = useHistory();

  const handleLogout = () => {
    removeCookies("username", { path: "/" });
    removeCookies("id", { path: "/" });
    removeCookies("role_id", { path: "/" });
    removeCookies("token", { path: "/" });
    history.push("/");
    window.location.reload();
  };
  return (
    <>
      {cookies.role_id == 2 ? (
        <div className="d-flex">
          <div className="col-sm-2 sidebar vh-100">
            <div className="d-flex align-items-center back mt-3">
              <img
                src={back}
                alt=""
                className="me-1"
                type="button"
                onClick={() => history.goBack()}
              />
              <div type="button" onClick={() => history.goBack()}>
                Back
              </div>
            </div>
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
                <p>Admin : {cookies.username}</p>
              </div>
            </div>
            <div className="wrap mt-2">
              <div
                className={
                  navReport == "yourReport"
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
                  navReport == "announcement"
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
                        onClick={handleLogout}
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
          {navReport == "yourReport" ? <YourReport /> : <Announcement />}
        </div>
      ) : (
        <div className="d-flex">
          <div className="col-sm-2 sidebar vh-100">
            <div className="d-flex align-items-center back mt-3">
              <img
                src={back}
                alt=""
                className="me-1"
                type="button"
                onClick={() => history.goBack()}
              />
              <div type="button" onClick={() => history.goBack()}>
                Back
              </div>
            </div>
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
                <p>Admin : {cookies.username}</p>
              </div>
            </div>
            <div className="wrap mt-2">
              <div
                className={
                  navAdmin == "reported"
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
                  navAdmin == "yourReport"
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
                  navAdmin == "announcement"
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
                        onClick={handleLogout}
                      >
                        Yes
                      </button>

                      <button
                        type="button"
                        className={`btn btn-primary rounded-pill mx-auto`}
                        data-bs-dismiss="modal"
                        aria-label="Close"
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
          {navAdmin == "reported" ? (
            <ReportedList />
          ) : navAdmin == "yourReport" ? (
            <YourReport />
          ) : (
            <Announcement />
          )}
        </div>
      )}
    </>
  );
};

export default Admin;
