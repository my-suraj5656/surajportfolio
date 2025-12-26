import React from 'react';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectBanner}>
        <span>{project.icon}</span>
      </div>
      <div className={styles.projectContent}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <div className={styles.projectDate}>{project.date}</div>
        </div>
        
        <p className={styles.projectDescription}>{project.description}</p>
        
        <ul className={styles.projectFeatures}>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        
        <div className={styles.projectTech}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.techBadge}>{tech}</span>
          ))}
        </div>
        
        <div className={styles.projectLinks}>
          {project.demoLink && (
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.projectBtn} ${styles.projectBtnPrimary}`}
            >
              🚀 Live Demo
            </a>
          )}
          {project.codeLink && (
            <a 
              href={project.codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.projectBtn} ${styles.projectBtnSecondary}`}
            >
              💻 View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
