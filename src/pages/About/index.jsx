import React from "react";
import avatar from "../../assets/image/avatar.jpg"
import styles from "./about.module.css"

const About = () => {
    return (
        <div className="container-wrapper">
            <div className={`${styles.about_pag}`}>
                <div className={`${styles.left}`}>
                </div>
                <div className={`${styles.right}`}>
                    <div className={`${styles.wrapper}`}>
                        <div className={`${styles.image}`}>
                            <img src={avatar} alt="avatar"/>
                        </div>
                        <div className={`${styles.contacts}`}>
                            <ul>
                                <li><a href="tel:094775181">Phone: 094 77 51 81 </a></li>
                                <li><a href="mailto:vanushgrigoryan90@gmail.com">Email: vanushgrigoryan90@gmail.com</a>
                                </li>
                                <li><a href="https://linkedin.com/in/vanush-grigoryan/">Linkedin: www.linkedin.com</a>
                                </li>
                                <li><a href="https://github.com/Vanush27">Github: www.github.com</a></li>
                            </ul>
                        </div>

                    </div>


                </div>
            </div>
            <h1 className={`${styles.h1}`}>VANUSH GRIGORYAN</h1>

            <div className={`${styles.about_pag}`}>
                <div className={`${styles.left}`}>
                    <div className={`${styles.h3}`}>
                        <h3>Work Experience</h3>
                    </div>
                </div>

                <div className={`${styles.right}`}>
                    <div className={`${styles.wrapper}`}>
                        <div className={`${styles.contacts}`}>
                            <ul>
                                <li> «NATIONAL BODY FOR STANDARDS AND METROLOGY»CJSC
                                    Electrical Meters Measurement Department, leading specialist 2015 – Present
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`${styles.about_pag}`}>
                <div className={`${styles.left}`}>
                    <div className={`${styles.h3}`}>
                        <h3>Software Skiils</h3>
                    </div>
                </div>

                <div className={`${styles.right}`}>

                    <div className={`${styles.wrapper}`}>

                        <div className={`${styles.contacts}`}>
                                <ul className={`${styles.skills}`}>
                                    <li>*  HTML,CSS</li>
                                    <li>*  JavaScript, React JS</li>
                                    <li>*  PHP (Laravel), OOP</li>
                                    <li>*  JQuery, Ajax, REST API</li>
                                    <li>*  Git,MySql</li>
                                    <li>*  Linux,Figma,Photoshop</li>
                                </ul>
                        </div>

                    </div>

                </div>
            </div>
            <div className={`${styles.about_pag}`}>
                <div className={`${styles.left}`}>
                    <div className={`${styles.h3}`}>
                        <h3>Education </h3>
                    </div>
                </div>
                <div className={`${styles.right}`}>

                    <div className={`${styles.wrapper}`}>
                        <div className={`${styles.contacts}`}>
                            <h5>Courses (2019 -2021)</h5>
                            <ul>
                                <li>1.Java and Android courses in Basic IT Centre 2019 (6 months)</li>
                                <li>2.Integrated Circuit Design is Synopsys Armenia 2019-2020 (3 months)</li>
                                <li>3.Web developer trainings in TCO LLC 2021</li>

                            </ul>
                            <h5>University (2007 - 2011)</h5>
                            <ul>
                                <li>State Engineering University of Armenia(Polytechnic)
                                    Spec: Design and Technology of Electronic Devices
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
            <div className={`${styles.about_pag}`}>
                <div className={`${styles.left}`}>
                    <div className={`${styles.h3}`}>
                        <h3>Languages</h3>
                    </div>
                </div>
                <div className={`${styles.right}`}>
                    <div className={`${styles.wrapper}`}>
                        <div className={`${styles.contacts}`}>
                            <ul>
                                <li>Armenian Native</li>
                                <li> Russian Good</li>
                                <li> English Good</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;