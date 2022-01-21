import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import logo1 from "../../assets/img/logoWithText.svg";
import styles from "./header.module.css";
import userImg from "../../assets/img/userImg.svg";
import notifIcon from "../../assets/img/notifIcon.svg";
import alert from "../../assets/img/alert.svg";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
// import logo2 from "../../assets/img/logo.svg";
// import Loading from "../loading/loading"

// const HeaderLogic =() =>{
//   if 
// };

const Header = (props) => {
  const [cookies, setCookie] = useCookies(["username","id","token"]);
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
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

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
          passRgs: "Wrong Password Format",
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
          passConf: "Password not Match",
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
    // console.log(rgsBtnStat);
    // console.log(errMsg);
  };

  const respon = function () {
    alert(response);
  };
  const handleLogin = (e) => {
    if (e.target.name === "btnLogin") {
      axios
        .post("http://localhost:8000/user/login", {
          email: emailusr,
          password: pass,
        })
        .then(function (response) {
          // console.log(response.data.data)
          // console.log(response.data.data.id)
          if (response.data.data.id == 0) {
            Swal.fire({
              title: "Error!",
              text: "User Not Found",
              icon: "error",
              confirmButtonText: "Close",
            });
          } else {
            Swal.fire(
              "Success!",
              "Hello" + " " + response.data.data.username,
              "success"
            );

            setCookie("username", response.data.data.username, { path: "/" });
            setCookie("id", response.data.data.id, { path: "/" });
            setCookie("token", response.data.data.token, { path: "/" });
            console.log(cookies);
          }
        })
        .catch(function (error) {
          Swal.fire({
            title: "Error!",
            text: "Error Login",
            icon: "error",
            confirmButtonText: "Close",
          });
        });
    } else if (e.target.name === "btnRegister") {
      axios
        .post("http://localhost:8000/user/create", {
          username: username,
          email: emailusrRgs,
          password: passRgs,
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
            text: "Error Login",
            icon: "error",
            confirmButtonText: "Close",
          });
        });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className={`navbar-brand ${styles.title}`} href="#">
            <img src={logo} alt="logo" className={styles.logo} />
            INFION
          </a>
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
                    href="#"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item  mx-sm-5">
                <Link to={`/threads`} className={`${styles.link}`}>
                  <a className={`nav-link text-reset`} href="#">
                    Threads
                  </a>
                </Link>
              </li>
              <li className="nav-item  mx-sm-5">
                <Link to={`/about`} className={`${styles.link}`}>
                  <a className="nav-link text-reset" href="#">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="nav-item  mx-sm-5">
                <a
                  className="nav-link text-reset"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#ModalAlertLogin"
                >
                  Make Own Threads
                </a>
                <div
                  className={`modal fade textBlack `}
                  id="ModalAlertLogin"
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
                          <h5 className="fw-bold my-2">Please Login First!</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
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
                >
                  Register
                </a>
              </li>
            </ul>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
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
                      placeholder="example@example.com"
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
              onClick={handleLogin}
              name="btnRegister"
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
    </>
  );
};

const HeaderLogged = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className={`navbar-brand ${styles.title}`} href="#">
            <img src={logo} alt="logo" className={styles.logo} />
            INFION
          </a>
          <div
            className={`collapse navbar-collapse ${styles.grow}`}
            id="navbarNav"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item mx-sm-5">
                <a
                  className="nav-link active text-reset"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item  mx-sm-5">
                <Link to={`/threads`} className={`${styles.link}`}>
                  <a className="nav-link text-reset" href="#">
                    Threads
                  </a>
                </Link>
              </li>
              <li className="nav-item  mx-sm-5">
                <Link to={`/about`} className={`${styles.link}`}>
                  <a className="nav-link text-reset" href="#">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="nav-item  mx-sm-5">
                <Link to={`/createThread`} className={`${styles.link}`}>
                  <a className="nav-link text-reset" href="#">
                    Make Own Threads
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.wrap} d-flex align-items-center`}>
            <div className={`dropdown me-4`}>
              <div
                className="prof"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={userImg} alt="" className={`${styles.profileSize}`} />
              </div>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Your Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Your Thread
                  </a>
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
                <div className={`modal-content mx-auto ${styles.radius}`}>
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
                <img src={notifIcon} alt="" className={`${styles.notifSize}`} />
              </div>
              <ul
                className="dropdown-menu m-auto"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <h3 className="dropdown-header" href="#">
                    Notifications
                  </h3>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <button
              className="navbar-toggler me-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export { Header, HeaderLogged };
