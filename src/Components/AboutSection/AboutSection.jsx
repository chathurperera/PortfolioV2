import React from "react";
import styles from "./AboutSection.module.scss";
import me from "@/Assets/chathuraperera.png";
import logo from "@/Assets/logo.png";
import nextIcon from '@/Assets/right.png'

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.contentIntro}>
          <h3 className={styles.biggerText}>
            Hi Im chathura , I'm a full stack developer with a passion for
            solving problems through interactive web experiences.
          </h3>
          <p className={styles.smallerText}>
            I'm a self-taught developer with experience in developing new
            features from ideation to production, implementation of wireframes
            and design flows into high-performance web applications.
          </p>
          <p className={styles.smallerText}>
            I take into consideration the user experience while writing reusable
            and efficient code.
          </p>
          <h3 className={styles.biggerText}>
            I passionately combine good design, technology, and innovation in
            all my projects, which I like to accompany from the first idea to
            release.
          </h3>
          <p className={styles.smallerText}>
            Currently, I'm focusing on MERN Stack development while expanding my
            skills as a software engineer.
          </p>
          <p className={styles.smallerText}>
            While I spend most of my time coding, I also enjoy working out and
            trying out new recipes.
          </p>
          <div className={styles.resume}>
            <a href="Chathura_Perera_CV.pdf" target="_blank">
              Checkout my Resume
            </a>
           <img src={nextIcon} alt="next icon" />
          </div>
          <div className={styles.skills}>
            <div className={styles.listTitle}>
              <h3>Skills</h3>{" "}
            </div>
            <ul className={styles.listItems}>
              <li>HTML</li>
              <li>CSS3</li>
              <li>Sass</li>
              <li>Bootstrali</li>
              <li>Tailwind CSS</li>
              <li>Javascrilit (ES6+)</li>
              <li>React.js</li>
              <li>Vue.js</li>
              <li>Next.js</li>
              <li>Nuxt.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Exliress.js</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className={`${styles.skills} ${styles.borderHide}`}>
            <div className={styles.listTitle}>
              <h3>Tools</h3>{" "}
            </div>
            <ul className={styles.listItems}>
              <li>Git</li>
              <li>GitHub</li>
              <li>liarcel</li>
              <li>VsCode</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
        <div className={styles.contentImage}>
          <div className={styles.imgWrap}>
            <img src={me} alt="chathura perera" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
