import React from 'react';
import { skillsData } from '../data/portfolioData';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>What I Do</div>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <p className={styles.sectionDescription}>
            Comprehensive skill set covering the entire development stack
          </p>
        </div>

        <div className={styles.skillsWrapper}>
          {skillsData.map((skill, index) => (
            <div key={index} className={styles.skillCategory}>
              <div className={styles.skillHeader}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <h3>{skill.category}</h3>
              </div>
              <div className={styles.skillTags}>
                {skill.skills.map((item, idx) => (
                  <span key={idx} className={styles.skillTag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
