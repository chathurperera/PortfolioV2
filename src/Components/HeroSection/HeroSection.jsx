import React from "react";
import styles from './HeroSection.module.scss';
import scrollTriggerArrow from '../../Assets/scrolldownArrow.png'
import CircularText from '../../Assets/Circular Text.png'
export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={`${styles.heroSectionTitle} `}>
          Developer devoted to crafting <i>intuitive</i> web experiences
        </h1>
        <div className={styles.circularText}>
          <img src={CircularText} className={styles.circularTextImage} alt="Circular Text" />
        <img className={styles.arrowIcon} src={scrollTriggerArrow} alt="" />
        </div>
      {/* <p className={`${styles.scrollTrigger} ${styles.fadeInBottomTrigger}`}>
        <span className={`${styles.bgAnimate} ${styles.bgAnimatedText}`}>scroll to discover</span>
        <img className={styles.bounce} src={scrollTriggerArrow} alt="" />
      </p> */}
      </div>
    </section>
  )
}
