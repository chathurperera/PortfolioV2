import React from "react";
import styles from './HeroSection.module.scss';
import scrollTriggerArro from '../../Assets/scrolldownArrow.png'
export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={`${styles.heroSectionTitle} `}>
          Developer devoted to crafting <i>intuitive</i> web experiences
        </h1>
      {/* <p className={`${styles.scrollTrigger} ${styles.fadeInBottomTrigger}`}>
        <span className={styles.bgAnimate}>scroll to discover</span>
        <img className={styles.bounce} src="scrolldownArrow.png" alt="" />
      </p> */}
      </div>
    </section>
  )
}
