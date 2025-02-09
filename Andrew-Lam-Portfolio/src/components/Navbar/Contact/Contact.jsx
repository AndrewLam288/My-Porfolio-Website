import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../../utils';

export const Contact = () => {
    return <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel Free To Reach Out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"/>
                <a href="mailto:lamminhtrunghieu288@gmail.com">Gmail.com/Andrew-Lam</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"/>
                <a href="https://www.linkedin.com/in/andrew-lam-889459332/">LinkedIn.com/Andrew-Lam</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon"/>
                <a href="https://github.com/AndrewLam288">GitHub.com/Andrew-Lam</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/phoneIcon.png")} alt="Phone Icon"/>
                <a>Phone: +1(320)-349-9413</a>
            </li>

        </ul>
    </footer>
}