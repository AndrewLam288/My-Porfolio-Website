import React from "react";
import { getImageUrl } from '../../../utils';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container} id="about">
        <h2 className={styles.title}>About Me: <br /> </h2>
        <p className={styles.AboutMeContent}>Being a Junior majoring in Computer Science at the University Of Minnesota Morris,
        I have a strong background and solid experience in full-stack developer.
        I seek a summer internship to build hands-on experience and contribute effectively to a forward-thinking team.
        </p>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} 
        alt="about/aboutImage.png" 
        className={styles.aboutImg}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")}
                alt="about/cursorIcon.png"
                className={styles.aboutIcon}
                />
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I am experienced in building responsive, functional and optimized sites
                    </p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")}
                alt="about/serverIcon.png"
                className={styles.aboutIcon}
                />
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>
                        I am experienced in developing server-side applications, working with databases & APIs
                    </p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")}
                alt="about/uiIcon.png"
                className={styles.aboutIcon}
                />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>
                        I love to design a user-friendly interface and have experience with this throughout my projects
                    </p>
                </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/tester.png")}
                alt="about/testIcon.png"
                className={styles.aboutIcon}
                />
                <div className={styles.aboutItemText}>
                    <h3>Tester</h3>
                    <p>
                        I am experienced in testing interfaces & functionality as well as testing the server-side applications
                    </p>
                </div>
            </li>

        </ul>
        </div>
        </section>
    );
}