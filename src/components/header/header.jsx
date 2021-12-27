import logo from '../../assets/img/logo.svg'
import styles from './header.module.css'

const Header = ()=> {
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
                                <a className="nav-link active text-reset" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item  mx-sm-5">
                                <a className="nav-link text-reset" href="#">Threads</a>
                            </li>
                            <li className="nav-item  mx-sm-5">
                                <a className="nav-link text-reset" href="#">About Us</a>
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

export default Header