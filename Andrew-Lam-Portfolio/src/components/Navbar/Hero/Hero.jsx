import React from "react";
import { getImageUrl } from '../../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}> 
                <h1 className={styles.title}> Hi! I am Andrew </h1>
                <p className={styles.description}> Being a Junior majoring in Computer Science at the University Of Minnesota Morris,
                    I have a strong background and solid experience in full-stack developer. <br />
                    I seek a summer internship to build hands-on experience and contribute effectively to a forward-thinking team. <br />
                    Feel free to reach out if you would like to learn more and look forward to hear from you soon! 
                </p>
                <a href="mailto:lamminhtrunghieu288@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImageAndrewLam.png")} alt="hero/heroImageAndrew.png" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};