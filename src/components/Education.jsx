import React from 'react';
import { educationData } from '../data/portfolioData';
import styles from '../styles/Education.module.css';

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Qualifications</div>
          <h2 className={styles.sectionTitle}>Education</h2>
          <p className={styles.sectionDescription}>
            Academic background and professional training
          </p>
        </div>

        <div className={styles.educationGrid}>
          {educationData.map((edu) => (
            <div key={edu.id} className={styles.educationCard}>
              <div className={styles.educationIcon}>{edu.icon}</div>
              <h3 className={styles.educationDegree}>{edu.degree}</h3>
              <div className={styles.educationSchool}>{edu.institution}</div>
              <div className={styles.educationMeta}>{edu.details} • {edu.duration}</div>
              <span className={styles.educationBadge}>{edu.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
