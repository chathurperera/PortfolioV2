import React from "react";
import styles from "./AboutSection.module.scss";
import me from "@/Assets/chathuraperera.png";
import logo from "@/Assets/logo.png";
export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.contentIntro}>
          <h3>
            Hi Im chathura , I'm a full stack developer with a passion for
            solving problems through interactive web experiences.
          </h3>
          <p>
            I'm a self-taught developer with experience in developing new
            features from ideation to production, implementation of wireframes
            and design flows into high-performance web applications.
          </p>
          <p>
            I take into consideration the user experience while writing reusable
            and efficient code.
          </p>
          <h3>
            I passionately combine good design, technology, and innovation in
            all my projects, which I like to accompany from the first idea to
            release.
          </h3>
          <p>
            Currently, I'm focusing on MERN Stack development while expanding my
            skills as a software engineer.
          </p>
          <p>
            While I spend most of my time coding, I also enjoy working out and
            trying out new recipes.
          </p>
          <div className={styles.resume}>
            <a href="Chathura_Perera_CV.pdf" target="_blank">
              Checkout my Resume
            </a>
            {/* <img className="logo-image" src={logo} alt="logo" loading="lazy" /> */}
          </div>
          <div className={styles.skills}>
            <div className={styles.listTitle}>
              <h3>Skills</h3>{" "}
            </div>
            <div className={styles.listItems}>
              <p>HTML</p>
              <p>CSS3</p>
              <p>Sass</p>
              <p>Bootstrap</p>
              <p>Tailwind CSS</p>
              <p>Javascript (ES6+)</p>
              <p>React.js</p>
              <p>Vue.js</p>
              <p>Next.js</p>
              <p>Nuxt.js</p>
              <p>Node.js</p>
              <p>MongoDB</p>
              <p>Mongoose</p>
              <p>Express.js</p>
              <p>MySQL</p>
            </div>
          </div>
          <div className={`${styles.skills} ${styles.borderHide}`}>
            <div className={styles.listTitle}>
              <h3>Tools</h3>{" "}
            </div>
            <div className={styles.listItems}>
              <p>Git</p>
              <p>GitHub</p>
              <p>Parcel</p>
              <p>VsCode</p>
              <p>Figma</p>
            </div>
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
