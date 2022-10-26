import { React, useEffect } from "react";
import styles from "./work.module.scss";

function Filter({ projects, setFiltered, setActiveSkill, activeSkill }) {
  useEffect(() => {
    if (activeSkill === "All") {
      setFiltered(projects);
      return;
    }
    const filtered = projects.filter((project) => {
      return project.techStack.includes(activeSkill);
    });
    console.log("filtered", filtered);
    console.log("activeSkill", activeSkill);
    setFiltered(filtered);
  }, [activeSkill]);
  function clickme() {
    console.log("clicked");
  }
  return (
    <div className={styles.filter}>
      <div className={`${styles.filterPill} `}>
        <button onClick={() => setActiveSkill("All")} tabIndex="2">
          All
        </button>
      </div>
      /
      <div className={styles.filterPill}>
        <button onClick={() => setActiveSkill("Tailwind CSS")} tabIndex="2">
          Tailwind CSS
        </button>
      </div>
      /
      <div className={styles.filterPill}>
        <button onClick={() => setActiveSkill("React.js")} tabIndex="2">
          React.js
        </button>
      </div>
      /
      <div className={styles.filterPill}>
        <button onClick={() => setActiveSkill("Next.js")} tabIndex="2">
          Next.js
        </button>
      </div>
      {/* <div className={styles.filterPill}>
        <button onClick={() => setActiveSkill("Nuxt.js")} tabIndex="2">
          Nuxt.js
        </button>
      </div> */}
    </div>
  );
}

export default Filter;
