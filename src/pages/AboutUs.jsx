import React from "react";
import styles from "./AboutUs.module.css";

//import svgs
import Golang from "../assets/img/Golang.svg";
import Javascript from "../assets/img/Javascript.svg";
import Html from "../assets/img/Html.svg";
import Bootstrap from "../assets/img/Bootstrap.svg";
import Css from "../assets/img/Css.svg";
import ReactSVG from "../assets/img/React.svg";

function AboutUs() {
    return (
        <div>
            <div>
                <h1>
                    About <span className={styles.yellow}>Infion</span>
                </h1>
                <p className={styles.desc}>
                    INFION is stands for Infinity Discussion. This website was
                    built to complete one of the task in alterra academy. The
                    purpose of INFINION is to connect people around the world in
                    many forum group discussion. So they can join on our forum
                    and make some comments. But they can also create discussion
                    in this website.
                </p>
            </div>
            <div>
                <p className={styles.built}>BUILT WITH</p>
                <div className={styles.logos}>
                    <img src={Golang} alt="Golang.sgv" />
                    <img src={Javascript} alt="Javascript.sgv" />
                    <img src={Html} alt="Html.sgv" />
                    <img src={Bootstrap} alt="Bootstrap.sgv" />
                    <img src={Css} alt="Css.sgv" />
                    <img src={ReactSVG} alt="React.sgv" />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
