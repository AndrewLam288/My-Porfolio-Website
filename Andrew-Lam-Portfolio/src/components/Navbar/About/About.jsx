import React from "react";
import { getImageUrl } from '../../../utils';
import styles from './About.module.css';

export const About = () => {
    return (
        <section><h2>Being a Junior majoring in Computer Science at the University Of Minnesota Morris,
        I have a strong background and solid experience in full-stack developer. <br />
        I seek a summer internship to build hands-on experience and contribute effectively to a forward-thinking team.</h2>
        <div>
            <img src={getImageUrl("about/aboutImage.png")} 
        alt="about/aboutImage.png" 
        className={styles.aboutImg}/>
        <ul>
            <li>
                <img src={getImageUrl("about/cursorIcon.png")}
                alt="about/cursorIcon.png"
                className={styles.aboutIcon}
                />
                <div>
                    <h3>Frontend Developer</h3>
                    <p>I'm a frontend developer with experience...
                    </p>
                </div>
            </li>

            <li>
                <img src={getImageUrl("about/serverIcon.png")}
                alt="about/serverIcon.png"
                className={styles.aboutIcon}
                />
                <div>
                    <h3>Backend Developer</h3>
                    <p>I'm a frontend developer with experience...
                    </p>
                </div>
            </li>

            <li>
                <img src={getImageUrl("about/uiIcon.png")}
                alt="about/cursorIcon.png"
                className={styles.aboutIcon}
                />
                <div>
                    <h3>UI Designer</h3>
                    <p>I'm a frontend developer with experience...
                    </p>
                </div>
            </li>
        </ul>
        </div>
        </section>
    );
}