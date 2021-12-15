import styles from './footer.module.css'
import logo from '../assets/img/logo.svg'
import infion from '../assets/img/infion.svg'
import gmail from '../assets/img/gmail.svg'
import ig from '../assets/img/instagram.svg'
import twitter from '../assets/img/twitter.svg'
import fb from '../assets/img/facebook.svg'

const Footer = ()=> {
    return (
        <>
        <hr />
        <div className={styles.container}>
            <div className={styles.wrapLogo}>
                <a className={`navbar-brand ${styles.title}`} href="#">
                    <img src={logo} alt="logo" className={styles.logo}/>INFION
                </a>
            </div>
            <div className="builder">
                <div className={styles.titleBuilder}>
                    Made By Kelompok 9 :
                </div>
                <div className={styles.contentBuilder}>
                    Yesaya Alehandro Silalahi
                </div>
                <div className={styles.contentBuilder}>
                    Restu Fajar Sidhiq               
                </div>
                <div className={styles.contentBuilder}>
                    Waldo Felix
                </div>
            </div>
            <div className="pages">
                <div className={styles.titlePages}>
                    Pages
                </div>
                <div className={styles.contentPages}>
                    Home
                </div>
                <div className={styles.contentPages}>
                    Threads
                </div>
                <div className={styles.contentPages}>
                    Make Threads
                </div>
                <div className={styles.contentPages}>
                    About Us
                </div>
            </div>
            <div className={styles.contact}>
                <div className={styles.titleContact}>
                    Contact Us
                </div>
                <img src={gmail} alt="Gmail" />
                <img src={ig} alt="Instagram" />
                <img src={twitter} alt="Twitter" />
                <img src={fb} alt="Facebook" />
            </div>
            <div className="standfor">
                <img src={infion} alt="Infion" className={styles.infion}/>
            </div>
        </div>
        </>
    )
}

export default Footer