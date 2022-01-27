import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import logo1 from "../../assets/img/logoWithText.svg";
import styles from "./header.module.css";
import notifIcon from "../../assets/img/notifIcon.svg";
import alert from "../../assets/img/alert.svg";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../actions/LoginAction";
// import logo2 from "../../assets/img/logo.svg";
// import Loading from "../loading/loading"

// const HeaderLogic =() =>{
//   if
// };

const Header = () => {
  const [cookies, setCookies, removeCookies] = useCookies([
    "username",
    "id",
    "role_id",
    "token",
  ]);
  const [emailusr, setEmail] = useState("");
  const [emailusrRgs, setEmailRgs] = useState("");
  const [pass, setPass] = useState("");
  const [passRgs, setPassRgs] = useState("");
  const [username, setUsername] = useState("");
  const [response, setResponse] = useState("");
  const def = {
    username: "",
    emailrgs: "",
    passRgs: "",
    passConf: "",
    email: "",
  };

  const [errMsg, setErrMsg] = useState(def);
  const [passConf, setPassConf] = useState("");
  const [rgsBtnStat, setRgsBtnStat] = useState("true");
  const [loginBtnStat, setLoginBtnStat] = useState("true");
  const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
  const usernameRegex = /^[a-z0-9_-]{5,16}$/;
  const passRegex =
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

  const validate = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
      if (e.target.value === "") {
        // setErrMsg({
        //   ...errMsg,
        //   email: "",
        // });
        setLoginBtnStat("true");
      }
      //  else if (!emailRegex.test(e.target.value)) {
      //   setErrMsg({
      //     ...errMsg,
      //     email: "Wrong Email Format",
      //   });
      //   setLoginBtnStat("true")
      // } else {
      //   setErrMsg({
      //     ...errMsg,
      //     email: "",
      //   });

      // }
      else if (pass != "" && e.target.value != "") {
        setLoginBtnStat("");
      }
    } else if (e.target.name === "password") {
      setPass(e.target.value);
      if (e.target.value === "") {
        setLoginBtnStat("true");
      } else if (emailusr != "" && e.target.value != "") {
        setLoginBtnStat("");
      }
    }

    // if( errMsg.email ==="" && pass != ""){
    //   setLoginBtnStat("")
    // }else{
    //   setLoginBtnStat("true")
    // }

    if (e.target.name === "emailrgs") {
      setEmailRgs(e.target.value);
      if (e.target.value === "") {
        setErrMsg({
          ...errMsg,
          emailrgs: "",
        });
        setRgsBtnStat("true");
      } else if (!emailRegex.test(e.target.value)) {
        setErrMsg({
          ...errMsg,
          emailrgs: "Wrong Email Format",
        });
        setRgsBtnStat("true");
      } else {
        setErrMsg({
          ...errMsg,
          emailrgs: "",
        });
      }
    } else if (e.target.name === "username") {
      setUsername(e.target.value);
      if (e.target.value === "") {
        setErrMsg({
          ...errMsg,
          username: "",
        });
        setRgsBtnStat("true");
      } else if (!usernameRegex.test(e.target.value)) {
        setErrMsg({
          ...errMsg,
          username: "Wrong Username Format",
        });
        setRgsBtnStat("true");
      } else {
        setErrMsg({
          ...errMsg,
          username: "",
        });
      }
    } else if (e.target.name === "passwordRgs") {
      setPassRgs(e.target.value);
      if (e.target.value === "") {
        setErrMsg({
          ...errMsg,
          passRgs: "",
        });
        setRgsBtnStat("true");
      } else if (!passRegex.test(e.target.value)) {
        setErrMsg({
          ...errMsg,
          passRgs: "Wrong Password Format. Must contain at least one alphabetical and numberical characters. Must at least 8 characters long.",
        });
        setRgsBtnStat("true");
      } else {
        setErrMsg({
          ...errMsg,
          passRgs: "",
        });
      }
    } else if (e.target.name === "passConf") {
      // console.log(passConf);
      // console.log(passRgs);
      setPassConf(e.target.value);
      if (e.target.value === "") {
        setErrMsg({
          ...errMsg,
          passConf: "",
        });
        setRgsBtnStat("true");
      } else if (e.target.value == passRgs) {
        setErrMsg({
          ...errMsg,
          passConf: "",
        });
      } else {
        setErrMsg({
          ...errMsg,
          passConf: "Password does not Match.",
        });
        setRgsBtnStat("true");
      }
    }
    if (
      errMsg == def &&
      emailusrRgs != "" &&
      username != "" &&
      passRgs != "" &&
      passConf != ""
    ) {
      setRgsBtnStat("");
    }
  };

  const respon = function () {
    alert(response);
  };

  const dispatch = useDispatch();
  const { userLoginResult } = useSelector((state) => state.UserLogin);
  const { userLoginError } = useSelector((state) => state.UserLogin);

  const handleLogin = (e) => {
    if (e.target.name === "btnLogin") {
      e.preventDefault();
      console.log("Masuk handle submit");
      dispatch(userLogin({ email: emailusr, password: pass }));
    } else if (e.target.name === "btnRegister") {
      axios
        .post("http://localhost:8000/user/create", {
          username: username,
          email: emailusrRgs,
          password: passRgs,
          url_img:
            "https://firebasestorage.googleapis.com/v0/b/alterra-fgd.appspot.com/o/default.jpeg?alt=media&token=507d4d4a-9dda-43ea-9743-0594b66644a6",
        })
        .then(function (response) {
          if (response.data.data.id == 0) {
            Swal.fire({
              title: "Error!",
              text: "User Not Found",
              icon: "error",
              confirmButtonText: "Close",
            });
          } else {
            Swal.fire(
              "Success Create New User!",
              "Hello" + " " + response.data.data.username,
              "Please Login With Your New Account"
            );
          }
        })
        .catch(function (error) {
          Swal.fire({
            title: "Error!",
            text: "Error Register",
            icon: "error",
            confirmButtonText: "Close",
          });
        });
    }
  };
  const history = useHistory();

  const handleLogout = () => {
    removeCookies("username", { path: "/" });
    removeCookies("id", { path: "/" });
    removeCookies("role_id", { path: "/" });
    removeCookies("token", { path: "/" });
    window.location.href = "/";
  };

  useEffect(() => {
    if (userLoginResult) {
      setEmail("");
      setPass("");

      setCookies("username", userLoginResult.username, { path: "/" });
      setCookies("id", userLoginResult.id, { path: "/" });
      setCookies("token", userLoginResult.token, { path: "/" });
      setCookies("role_id", userLoginResult.role_id, { path: "/" });
      setCookies("url_img", userLoginResult.url_img, { path: "/" });
    } else if (userLoginError) {
      setEmail("");
      setPass("");
      Swal.fire({
        title: "Error!",
        text: "Error Login!",
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  }, [userLoginResult, userLoginError]);

  useEffect(() => {
    if (cookies.username != undefined) {
      setUsernameStatus(true);
    }
  }, [cookies]);

  const [usernameStatus, setUsernameStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [dataAnnounce, setDataAnnounce] = useState({
    userId: 0,
    message: "",
  });

  const config = {
    headers: { Authorization: `Bearer ${cookies.token}` },
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:8000/announcements/list`,
          config
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
              {usernameStatus ? (
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
            {usernameStatus ? (
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
                          src={cookies.url_img}
                          alt="user_image"
                          className={`${styles.profileSize}`}
                        />
                      </div>
                      <ul
                        className="dropdown-menu dropdown-menu-end mt-1"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        {cookies.role_id == 1 ? (
                          <>
                            {" "}
                            <li>
                              <Link
                                to={`/profile/${cookies.id}`}
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
                                to={`/yourThreads/${cookies.id}`}
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
                            </li>{" "}
                          </>
                        ) : cookies.role_id == 2 ? (
                          <>
                            <li>
                              <Link
                                to={`/profile/${cookies.id}`}
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
                                to={`/yourThreads/${cookies.id}`}
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
                              <Link
                                to={`/admin`}
                                className={`${styles.clearDecoration}`}
                              >
                                <a className="dropdown-item" href="#">
                                  Management
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
                            </li>{" "}
                          </>
                        ) : (
                          <>
                            <li>
                              <Link
                                to={`/profile/${cookies.id}`}
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
                                to={`/yourThreads/${cookies.id}`}
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
                              <Link
                                to={`/admin`}
                                className={`${styles.clearDecoration}`}
                              >
                                <a className="dropdown-item" href="#">
                                  Management Admin
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
                            </li>{" "}
                          </>
                        )}
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
                                onClick={handleLogout}
                                name="btnLogout"
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
                        {data?.slice(0, 8).map((item, index) => (
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
                  name="email"
                  onChange={validate}
                  value={emailusr}
                  type="text"
                  placeholder="example@example.com"
                  required
                />
                <p className={styles.red}>{errMsg.email}</p>
              </div>
              <div>
                <h6 className="fw-bold  ms-1  my-2">Password</h6>
                <input
                  className={`form-control rounded-pill my-4`}
                  type="password"
                  name="password"
                  placeholder="example123"
                  onChange={validate}
                  value={pass}
                  required
                />
              </div>
            </div>
            <button
              type="button"
              className={`btn btn-secondary btn-lg rounded-pill mx-auto ${styles.btn}`}
              onClick={handleLogin}
              name="btnLogin"
              data-bs-dismiss="modal"
              aria-label="Close"
              disabled={loginBtnStat}
            >
              Login
            </button>
            <input
              type="hidden"
              id="custId"
              onChange={() => respon}
              value={response}
            />
            <br />
            <div className="mx-auto">
              <p className={`${styles.grey}`}>
                Don't have an account ?{" "}
                <a
                  href="#"
                  className={`${styles.blue}`}
                  data-bs-toggle="modal"
                  data-bs-target="#ModalRegister"
                >
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
                      placeholder="username"
                      name="username"
                      value={username}
                      onChange={validate}
                      required
                    />
                    <p className={styles.red}>{errMsg.username}</p>
                  </div>
                  <div>
                    <h6 className="fw-bold  ms-1  my-2">Email</h6>
                    <input
                      className={`form-control rounded-pill my-4`}
                      type="text"
                      name="emailrgs"
                      value={emailusrRgs}
                      placeholder="example@example.com"
                      onChange={validate}
                      required
                    />
                    <p className={styles.red}>{errMsg.emailrgs}</p>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <h6 className="fw-bold  ms-1  my-2">Password</h6>
                    <input
                      className={`form-control rounded-pill my-4`}
                      type="password"
                      name="passwordRgs"
                      value={passRgs}
                      onChange={validate}
                      placeholder="example123"
                      required
                    />
                  </div>
                  <p className={styles.red}>{errMsg.passRgs}</p>
                  <div>
                    <h6 className="fw-bold  ms-1  my-2">
                      Password Confirmation
                    </h6>
                    <input
                      className={`form-control rounded-pill my-4`}
                      type="password"
                      placeholder="example123"
                      name="passConf"
                      onChange={validate}
                      value={passConf}
                      required
                    />
                    <p className={styles.red}>{errMsg.passConf}</p>
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
                <label
                  className={`${styles.grey}`}
                  for="defaultCheck1"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  I agree with{" "}
                  <Link to="/agreement">
                    <a href="#" className={`${styles.blue}`}>
                      Terms and Privacy
                    </a>
                  </Link>
                </label>
              </div>
            </div>
            <br />
            <button
              type="button"
              className={`btn btn-secondary btn-lg rounded-pill mx-auto ${styles.btn}`}
              onClick={handleLogin}
              name="btnRegister"
              data-bs-dismiss="modal"
              aria-label="Close"
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
                  data-bs-toggle="modal"
                  data-bs-target="#ModalLogin"
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
