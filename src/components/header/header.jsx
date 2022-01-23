import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import logo1 from "../../assets/img/logoWithText.svg";
import styles from "./header.module.css";
import userImg from "../../assets/img/userImg.svg";
import notifIcon from "../../assets/img/notifIcon.svg";
import alert from "../../assets/img/alert.svg";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useEffect } from "react";

const Header = (props) => {
  const [username, setUsername] = useState(true);
  const [userId, setUserId] = useState(2);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataAnnounce, setDataAnnounce] = useState({
    userId: 0,
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/announcements/list`
        );
        setData(response.data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const getAnnounce = (announcer, message) => {
    return function () {
      setDataAnnounce({
        user: announcer,
        message: message,
      });
    };
  };

  console.log(data);
  return (
    <div className="bg-hitam">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link to={`/`} className={styles.link}>
            <a className={`navbar-brand ${styles.title}`} href="#">
              <img src={logo} alt="logo" className={styles.logo} />
              INFION
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item mx-sm-5">
                <Link to={`/`} className={styles.link}>
                  <a
                    className="nav-link active text-reset"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item  mx-sm-5">
                <Link to={`/threads`} className={`${styles.link}`}>
                  <a className={`nav-link text-reset`} href="/threads">
                    Threads
                  </a>
                </Link>
              </li>
              <li className="nav-item  mx-sm-5">
                <Link to={`/about`} className={`${styles.link}`}>
                  <a className="nav-link text-reset" href="/about">
                    About Us
                  </a>
                </Link>
              </li>
              {username ? (
                <li className="nav-item  mx-sm-5">
                  <Link to={`/createThread`} className={`${styles.link}`}>
                    <a className="nav-link text-reset" href="#">
                      Make Own Threads
                    </a>
                  </Link>
                </li>
              ) : (
                <li className="nav-item  mx-sm-5">
                  <a
                    className="nav-link text-reset"
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalUnlogged"
                  >
                    Make Own Threads
                  </a>
                  <div
                    className={`modal fade textBlack `}
                    id="ModalUnlogged"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div
                        className={`modal-content mx-auto ${styles.radius} bg-warning`}
                      >
                        <div className="modal-body mx-4">
                          <div
                            className={`p-5 d-flex flex-column align-items-center ${styles.alert}`}
                          >
                            <img src={alert} alt="alert" />
                            <h5 className="fw-bold my-2">
                              Please Login First!
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              )}
            </ul>
            {username ? (
              <>
                <ul className="navbar-nav">
                  <div
                    className={`${styles.wrap} d-flex align-items-center me-5`}
                  >
                    <div className={`dropdown me-4`}>
                      <div
                        className="prof"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={userImg}
                          alt=""
                          className={`${styles.profileSize}`}
                        />
                      </div>
                      <ul
                        className="dropdown-menu dropdown-menu-end mt-1"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link
                            to={`/profile/${userId}`}
                            className={`${styles.clearDecoration}`}
                          >
                            <a className="dropdown-item" href="#">
                              Your Profile
                            </a>
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <Link
                            to={`/yourThreads/${userId}`}
                            className={`${styles.clearDecoration}`}
                          >
                            <a className="dropdown-item" href="#">
                              Your Thread
                            </a>
                          </Link>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item text-reset"
                            data-bs-toggle="modal"
                            data-bs-target="#ModalLogout"
                            href="#"
                          >
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div
                      className={`modal fade textBlack `}
                      id="ModalLogout"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div
                          className={`modal-content mx-auto ${styles.radius}`}
                        >
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
                          <img
                            className={`mx-auto ${styles.size} mb-3`}
                            src={logo1}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="dropdown me-4">
                      <div
                        className="notif"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src={notifIcon}
                          alt=""
                          className={`${styles.notifSize}`}
                        />
                      </div>
                      <ul
                        className="dropdown-menu dropdown-menu-end mt-2"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <h3 className="fs-5 ms-3 py-1" href="#">
                            Notifications
                          </h3>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        {data?.map((item, index) => (
                          <>
                            <li
                              key={index}
                              onClick={getAnnounce(
                                item.announcer,
                                item.message
                              )}
                            >
                              <a
                                href="#"
                                className="dropdown-item text-reset"
                                data-bs-toggle="modal"
                                data-bs-target="#ModalAnnouncement"
                                href="#"
                              >
                                {item.message}
                              </a>
                            </li>
                            <li key={index}>
                              <hr className="dropdown-divider" />
                            </li>
                          </>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={`modal fade textBlack `}
                      id="ModalAnnouncement"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div
                          className={`modal-content mx-auto ${styles.announce}`}
                        >
                          <div
                            className={`modal-header ${styles.headerAnnounce}`}
                          >
                            <h5 className="modal-title" id="exampleModalLabel">
                              From : {dataAnnounce.user}
                            </h5>
                          </div>
                          <div
                            className={`modal-body d-flex flex-column ${styles.bodyAnnounce}`}
                          >
                            {dataAnnounce.message}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div> */}
                  </div>
                </ul>
              </>
            ) : (
              <ul className="navbar-nav">
                <li className="nav-item me-sm-3">
                  <a
                    className="nav-link text-reset"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalLogin"
                    href="#"
                  >
                    Login
                  </a>
                </li>

                <li className="nav-item me-sm-5">
                  <a
                    className="nav-link text-reset"
                    className="nav-link text-reset"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalRegister"
                    href="#"
                    href="#"
                  >
                    Register
                  </a>
                </li>
              </ul>
            )}
            {/* <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div> */}
          </div>
        </div>
      </nav>
      <div
        className={`modal fade textBlack `}
        id="ModalLogin"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content mx-auto ${styles.radius}`}>
            <div className="modal-header">
              <h4
                className="modal-title mx-auto fw-bolder"
                id="exampleModalLabel"
              >
                Login
              </h4>
            </div>
            <div className="modal-body mx-4">
              <div>
                <h6 className="fw-bold ms-1  my-2">Email</h6>
                <input
                  className={`form-control rounded-pill my-4`}
                  type="text"
                  placeholder="example@example.com"
                />
              </div>
              <div>
                <h6 className="fw-bold  ms-1  my-2">Password</h6>
                <input
                  className={`form-control rounded-pill my-4`}
                  type="password"
                  placeholder="example123"
                />
              </div>
            </div>
            <button
              type="button"
              className={`btn btn-secondary btn-lg rounded-pill mx-auto ${styles.btn}`}
            >
              Login
            </button>
            <br />

            <div className="mx-auto">
              <p className={`${styles.grey}`}>
                Don't have an account ?{" "}
                <a href="#" className={`${styles.blue}`}>
                  Register
                </a>
              </p>
            </div>
            <img className={`mx-auto ${styles.size}`} src={logo1} alt="" />
            <br />
          </div>
        </div>
      </div>
      <div
        className={`modal fade textBlack `}
        id="ModalRegister"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className={`modal-content mx-auto ${styles.radius2}`}>
            <div className="modal-header">
              <h4
                className="modal-title mx-auto fw-bolder"
                id="exampleModalLabel"
              >
                Register
              </h4>
            </div>
            <div className="modal-body mx-4">
              <div className="row">
                <div className="col">
                  <div>
                    <h6 className="fw-bold ms-1  my-2">Username</h6>
                    <input
                      className={`form-control rounded-pill my-4`}
                      type="text"
                      placeholder="example@example.com"
                    />
                  </div>
                  <div>
                    <h6 className="fw-bold  ms-1  my-2">Email</h6>
                    <input
                      className={`form-control rounded-pill my-4`}
                      type="text"
                      placeholder="example@example.com"
                    />
                  </div>
                </div>
                <div className="col">
                  <div>
                    <h6 className="fw-bold  ms-1  my-2">Password</h6>
                    <input
                      className={`form-control rounded-pill my-4`}
                      type="password"
                      placeholder="example123"
                    />
                  </div>
                  <div>
                    <h6 className="fw-bold  ms-1  my-2">
                      Password Confirmation
                    </h6>
                    <input
                      className={`form-control rounded-pill my-4`}
                      type="password"
                      placeholder="example123"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className={`${styles.grey}`} for="defaultCheck1">
                  I agree with{" "}
                  <a href="#" className={`${styles.blue}`}>
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className={`${styles.blue}`}>
                    Privacy
                  </a>
                </label>
              </div>
            </div>
            <br />
            <button
              type="button"
              className={`btn btn-secondary btn-lg rounded-pill mx-auto ${styles.btn}`}
            >
              Register
            </button>
            <br />

            <div className="mx-auto">
              <p className={`${styles.grey}`}>
                Have an account ?{" "}
                <a
                  data-bs-target="#ModalLogin"
                  href="#"
                  className={`${styles.blue}`}
                >
                  Login
                </a>
              </p>
            </div>
            <img className={`mx-auto ${styles.size2}`} src={logo1} alt="" />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
