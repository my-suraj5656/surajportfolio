import React, { useState } from 'react';
import { experienceData } from '../data/portfolioData';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  const [carouselIndices, setCarouselIndices] = useState({});

  const getCarouselIndex = (expId) => carouselIndices[expId] || 0;

  const nextProject = (expId, projectsLength) => {
    setCarouselIndices(prev => ({
      ...prev,
      [expId]: ((prev[expId] || 0) + 1) % projectsLength
    }));
  };

  const prevProject = (expId, projectsLength) => {
    setCarouselIndices(prev => ({
      ...prev,
      [expId]: (prev[expId] || 0) === 0 ? projectsLength - 1 : (prev[expId] || 0) - 1
    }));
  };

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Work History</div>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          <p className={styles.sectionDescription}>
            My journey through the software development industry
          </p>
        </div>

        <div className={styles.timeline}>
          {experienceData.map((exp) => {
            const currentIndex = getCarouselIndex(exp.id);
            const currentProject = exp.projects[currentIndex];
            const hasMultipleProjects = exp.projects.length > 1;

            return (
              <div key={exp.id} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>

                <div className={styles.experienceCard}>
                  <div className={styles.experienceHeader}>
                    <h3 className={styles.experienceRole}>{exp.role}</h3>
                    <div className={styles.experienceCompany}>{exp.company}</div>
                    <div className={styles.experienceMeta}>
                      <span className={styles.metaItem}>📅 {exp.date}</span>
                      <span className={styles.metaItem}>📍 {exp.location}</span>
                    </div>
                  </div>

                  <ul className={styles.experienceList}>
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className={styles.experienceProjects}>
                    <h4 className={styles.projectsTitle}>
                      Projects Built:
                      {hasMultipleProjects && (
                        <span className={styles.projectCounter}>
                          ({currentIndex + 1} / {exp.projects.length})
                        </span>
                      )}
                    </h4>

                    <div className={styles.carouselContainer}>
                      {hasMultipleProjects && (
                        <button
                          className={styles.carouselButton + ' ' + styles.prevButton}
                          onClick={() => prevProject(exp.id, exp.projects.length)}
                          aria-label="Previous project"
                        >
                          ◀
                        </button>
                      )}

                      <div className={styles.miniProjects}>
                        <div className={styles.miniProject}>
                          <div className={styles.miniProjectContent}>
                            <div>
                              <div className={styles.miniProjectName}>{currentProject.name}</div>
                              <div className={styles.miniProjectDesc}>{currentProject.description}</div>
                              <div className={styles.miniProjectTech}>
                                {currentProject.technologies.map((tech, i) => (
                                  <span key={i}>{tech}</span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className={styles.miniProjectLinks}>
                            {currentProject.demoLink && currentProject.demoLink !== "#" && (
                              <a
                                href={currentProject.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.projectButton + ' ' + styles.demoButton}
                                title="View Live Demo"
                              >
                                🌐 Deploy
                              </a>
                            )}
                            {currentProject.codeLink && currentProject.codeLink !== "#" && (
                              <a
                                href={currentProject.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.projectButton + ' ' + styles.codeButton}
                                title="View Source Code"
                              >
                                💻 GitHub
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      {hasMultipleProjects && (
                        <button
                          className={styles.carouselButton + ' ' + styles.nextButton}
                          onClick={() => nextProject(exp.id, exp.projects.length)}
                          aria-label="Next project"
                        >
                          ▶
                        </button>
                      )}
                    </div>

                    {hasMultipleProjects && (
                      <div className={styles.carouselDots}>
                        {exp.projects.map((_, idx) => (
                          <button
                            key={idx}
                            className={styles.dot + ' ' + (idx === currentIndex ? styles.activeDot : '')}
                            onClick={() => setCarouselIndices(prev => ({ ...prev, [exp.id]: idx }))}
                            aria-label={`Go to project ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
