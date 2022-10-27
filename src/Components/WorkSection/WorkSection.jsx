import { React, useState } from "react";
import styles from "./work.module.scss";
import Project from "./Project";
import SectionTitle from "@/Components/SectionTitle/SectionTitle";
import Filter from "./Filter";
import { projectData } from "../../../data";

function WorkSection() {
  const [projects, setProjects] = useState(projectData);
  const [filtered, setFiltered] = useState(projectData);
  const [activeSkill, setActiveSkill] = useState("All");

  return (
    <section id="work" className={styles.workSection}>
      <SectionTitle title="Work" />
      <Filter
        projects={projects}
        setFiltered={setFiltered}
        setActiveSkill={setActiveSkill}
        activeSkill={activeSkill}
      />
      <div className={styles.projects}>
        {filtered.map((project, index) => {
          return (
            <Project
              key={index}
              imageUrl={project.imageUrl}
              previewUrl={project.previewUrl}
              codeUrl={project.codeUrl}
              projectTitle={project.name}
              techStack={project.techStack}
              description={project.description}
            />
          );
        })}
      </div>
    </section>
  );
}
export default WorkSection;
