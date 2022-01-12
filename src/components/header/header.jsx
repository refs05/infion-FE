import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import styles from './header.module.css'
import userImg from "../../assets/img/userImg.svg";
import notifIcon from "../../assets/img/notifIcon.svg"

const Header = (props)=> {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className={`navbar-brand ${styles.title}`} href="#">
                        <img src={logo} alt="logo" className={styles.logo}/>INFION
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item mx-sm-5">
                                <Link to={`/`} className={styles.link}>
                                <a className="nav-link active text-reset" aria-current="page" href="#">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item  mx-sm-5">
                                <Link to={`/threads`} className={`${styles.link}`}>
                                    <a className={`nav-link text-reset`} href="#">Threads</a>
                                </Link>
                            </li>
                            <li className="nav-item  mx-sm-5">
                                <Link to={`/about`} className={`${styles.link}`}>
                                    <a className="nav-link text-reset" href="#">About Us</a>
                                </Link>
                            </li>
                            <li className="nav-item  mx-sm-5">
                                <a className="nav-link text-reset" href="#">Make Own Threads</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item me-sm-3">
                                <a className="nav-link text-reset" href="#">Login</a>
                            </li>
                            <li className="nav-item me-sm-5">
                                <a className="nav-link text-reset" href="#">Register</a>
                            </li>
                        </ul>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

const HeaderLogged = (props)=> {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className={`navbar-brand ${styles.title}`} href="#">
                        <img src={logo} alt="logo" className={styles.logo}/>INFION
                    </a>
                    <div className={`collapse navbar-collapse ${styles.grow}`} id="navbarNav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item mx-sm-5">
                                <a className="nav-link active text-reset" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item  mx-sm-5">
                                <Link to={`/threads`} className={`${styles.link}`}>
                                    <a className="nav-link text-reset" href="#">Threads</a>
                                </Link>
                            </li>
                            <li className="nav-item  mx-sm-5">
                                <Link to={`/about`} className={`${styles.link}`}>
                                    <a className="nav-link text-reset" href="#">About Us</a>
                                </Link>
                            </li>
                            <li className="nav-item  mx-sm-5">
                                <a className="nav-link text-reset" href="#">Make Own Threads</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`${styles.wrap} d-flex align-items-center`}>
                        <div className={`dropdown me-4`}>
                            <div className="prof" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={userImg} alt="" className={`${styles.profileSize}`}/>
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Your Profile</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Your Thread</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </div>
                            <div className="dropdown me-4">
                                <div className="notif" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={notifIcon} alt="" className={`${styles.notifSize}`}/>
                                </div>
                                <ul className="dropdown-menu m-auto" aria-labelledby="dropdownMenuButton1">
                                    <li><h3 className="dropdown-header" href="#">Notification</h3></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        <button className="navbar-toggler me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export {Header, HeaderLogged}