import React, { useState } from "react";
import styles from "./aboutUs.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

//import components
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

//import svg
import golang from "../../assets/img/golang.svg";
import javascript from "../../assets/img/javascript.svg";
import html from "../../assets/img/html.svg";
import bootstrap from "../../assets/img/bootstrap.svg";
import css from "../../assets/img/css.svg";
import react from "../../assets/img/react.svg";

function AboutUs() {
  const { userLoginResult } = useSelector((state) => state.UserLogin);
  console.log(userLoginResult);
  return (
    <div className="bg-hitam">
      <Header />
      <div className={`${styles.sectionHeight}`}>
        <div className="mt-5">
          <h1>
            About <span className={styles.yellow}>Infion</span>
          </h1>
          <p className={styles.desc}>
            INFION is stands for Infinity Discussion. This website was built to
            complete one of the task in alterra academy. The purpose of INFINION
            is to connect people around the world in many forum group
            discussion. So they can join on our forum and make some comments.
            But they can also create discussion in this website.
          </p>
        </div>
        <div>
          <p className={styles.built}>BUILT WITH</p>
          <div className={styles.logos}>
            <img src={golang} alt="golang.svg" />
            <img src={javascript} alt="javascript.svg" />
            <img src={html} alt="html.svg" />
            <img src={bootstrap} alt="bootstrap.svg" />
            <img src={css} alt="css.svg" />
            <img src={react} alt="react.svg" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
