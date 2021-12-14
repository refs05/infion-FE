import React from "react";
import styles from "./AboutUs.module.css";

function AboutUs() {
    return (
        <div>
            <div>
                <h1>
                    About <span className={styles.yellow}>Infion</span>
                </h1>
                <p className={styles.desc}>
                    INFION is stands for Infinity Discussion. This website
                    builded to complete one of the task in alterra academy. The
                    purpose of INFINION is to connect people around the world in
                    many forum group discussion. So they can join on our forum
                    and make some comment. But they can also make discussion in
                    this website.
                </p>
            </div>
            <div>
                <p className={styles.built}>BUILT WITH</p>
            </div>
        </div>
    );
}

export default AboutUs;
