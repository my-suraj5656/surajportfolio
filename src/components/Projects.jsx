import React from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Portfolio</div>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionDescription}>
            Personal projects showcasing my full-stack development abilities
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
