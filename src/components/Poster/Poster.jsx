import React from "react";
import styles from "../../styles/Home.module.css";
import BG from "../../images/computer.png";

const Poster = () => {
    return (
        <section className={styles.home}>
            <div className={styles.title}>Big Sale</div>
            <div className={styles.product}>
                <div className={styles.text}>
                    <div className={styles.subtitle}>top sale</div>

                    <h1 className={styles.head}>Riva TNT2Pro Vanta</h1>
                    <button className={styles.button}>add</button>
                </div>
                <div className={styles.image}>
                    <img src={BG} alt="computer" />
                </div>
            </div>
        </section>
    );
};

export default Poster;
