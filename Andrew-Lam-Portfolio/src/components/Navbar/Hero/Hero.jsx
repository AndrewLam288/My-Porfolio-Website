import React from "react";
import { getImageUrl } from '../../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}> 
                <h1 className={styles.title}> Hi! I am Andrew </h1>
                <p className={styles.description}> Junior majoring in Computer Science, I am experienced in full-stack developer,
                    and work remotely in the USA. <br />
                    Feel free to reach out if you would like to learn more and look forward to hear from you soon! <br />
                    Location: Morris, MN 56267
                </p>
                <a href="mailto:lamminhtrunghieu288@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImageAndrewLam.png")} alt="hero/heroImageAndrew.png" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};