import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import logo1 from "../../assets/img/logoWithText.svg";
import styles from "./header.module.css";
import userImg from "../../assets/img/userImg.svg";
import notifIcon from "../../assets/img/notifIcon.svg";
import alert from "../../assets/img/alert.svg"

const Header = (props) => {

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
                  <a className="nav-link text-reset" href="#" data-bs-toggle="modal"
                  data-bs-target="#ModalLogin">
                  Make Own Threads
                  </a>
                  <div
                    className={`modal fade textBlack `}
                    id="ModalLogin"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className={`modal-content mx-auto ${styles.radius} bg-warning`}>
                        <div className="modal-body mx-4">
                          <div className={`p-5 d-flex flex-column align-items-center ${styles.alert}`}>
                            <img src={alert} alt="alert"/>
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
            <br/>
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
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
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
