import React from "react";
import styles from "./AboutSection.module.scss";
import me from "@/Assets/RoundProfileImage.png";
import logo from "@/Assets/logo.png";
export default function AboutSection() {
  return (
    <section id='about' className={styles.aboutSection}>
      <div className={styles.content}>
        <div className={styles.contentIntro}>
          <p>
            My name is Chathura Perera, Im a self-taught frontend developer based
            in Colombo.Since I&apos;ve been interested in creating websites for
            several years, I&apos;ve acquired a great deal of professional experience
            under the guidance of senior software engineers.
          </p>
          <p>
            As a developer, I&apos;ve worked on a variety of projects from UI
            development to API integrations.
          </p>
          <p>
            While I spend most of my time coding, I also enjoy working out
            and trying out new recipes.
          </p>
          <div className={styles.logo}>
            <img className="logo-image" src={logo} alt="logo" />
          </div>
        </div>
        <div className={styles.contentImage}>
          <div className={styles.imgWrap}>
            <img src={me} alt="chathura perera" />
          </div>
        </div>
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
    </section>
  );
}
