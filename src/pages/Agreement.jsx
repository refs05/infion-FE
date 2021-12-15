import React from "react";
import styles from "./Agreement.module.css";

//import components
import Header from "../components/header";
import Footer from "../components/footer";

function Agreement() {
    return (
        <div>
            <Header />
            <div>
                <h1>Terms and Agreements</h1>
                <div className={styles.desc}>
                    <p>
                        This website is operated by members of Group 9 which
                        include Restu Fajar Sidhiq, Waldo Felix, and Yesaya
                        Alehandro Silalahi. Throughout the site, the terms “we”,
                        “us” and “our” refer to Group 9. Group 9 offers this
                        website, including all information, tools and services
                        available from this site to you, the user, conditioned
                        upon your acceptance of all terms, conditions, policies
                        and notices stated here. By visiting our site and
                        browsing the contents, you engage in our “Service” and
                        agree to be bound by the following terms and conditions
                        (“Terms of Service”, “Terms”), including those
                        additional terms and conditions and policies referenced
                        herein and/or available by hyperlink. These Terms of
                        Service apply to all users of the site, including
                        without limitation users who are browsers, vendors,
                        customers, merchants, and/ or contributors of content.
                        Please read these Terms of Service carefully before
                        accessing or using our website. By accessing or using
                        any part of the site, you agree to be bound by these
                        Terms of Service. If you do not agree to all the terms
                        and conditions of this agreement, then you may not
                        access the website or use any services. If these Terms
                        of Service are considered an offer, acceptance is
                        expressly limited to these Terms of Service. Any new
                        features which are added to the current website shall
                        also be subject to the Terms of Service. You can review
                        the most current version of the Terms of Service at any
                        time on this page. We reserve the right to update,
                        change or replace any part of these Terms of Service by
                        posting updates and/or changes to our website. It is
                        your responsibility to check this page periodically for
                        changes. Your continued use of or access to the website
                        following the posting of any changes constitutes
                        acceptance of those changes.
                    </p>
                    <br />
                    <h6>SECTION 1 - REGISTRATION</h6>
                    <p>
                        Before you can start posting and participating in
                        discussions on INFION, You need to understand and agree
                        to these terms:
                        <ol type="a">
                            <li>
                                By registering an account, you are willing to
                                provide us with your e-mail adress, username,
                                and password.
                            </li>
                            <li>
                                Your username may not imitate another individual
                                or organisation without any permission.
                            </li>
                            <li>
                                Your username may not imitate another individual
                                or organisation with the intent to pretend as
                                that individual or oranisation.
                            </li>
                            <li>
                                Your username may not contain any offensive or
                                inappropriate words.
                            </li>
                            <li>
                                Your username belongs to INFION, and we hold all
                                rights to change or remove it.
                            </li>
                            <li>
                                You are responsible for keeping your username
                                and password a secret.
                            </li>
                            <li>
                                You are responsible for the legitimacy of your
                                registered datas.
                            </li>
                            <li>
                                We are not responsible for any legal troubles
                                caused by your registered datas.
                            </li>
                        </ol>
                    </p>
                    <br />
                    <h6>SECTION 2 - Content</h6>
                    <p>
                        Before you can start posting and participating in
                        discussions on INFION, You need to understand and agree
                        to these terms:
                        <ol type="a">
                            <li>
                                All users are solely responsible of all content
                                they posted in Infion. Infion shall not be held
                                responsible in any way should the content posted
                                by the users cause any trouble.
                            </li>
                            <li>
                                We hold the right to give any detail and
                                information of any content the user posted
                                towards the law enforcement should the user be
                                caught in legal trouble.
                            </li>
                            <li>
                                The content you post must not contain any of the
                                following:
                                <ol type="i">
                                    <li>False information.</li>
                                    <li>Illegal content.</li>
                                    <li>Copyrighted content.</li>
                                    <li>
                                        Information of a third party without
                                        permission.
                                    </li>
                                    <li>
                                        Discrimination towards any tribe,
                                        religion, race, group, or gender.
                                    </li>
                                    <li>Spam.</li>
                                    <li>Pornography.</li>
                                    <li>
                                        Virus or any other malicious software.
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </p>
                    <br />
                    <p>
                        A breach or violation of any of the Terms will result in
                        an immediate termination of your account.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Agreement;
