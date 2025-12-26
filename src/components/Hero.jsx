import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1>Suraj R Prasad</h1>
            
            <div className={styles.heroTitle}>MERN Stack Developer</div>
            
            <p className={styles.heroDescription}>
              Mechanical Engineering graduate who successfully transitioned into software development. 
              Experienced in building full-stack web applications with the MERN stack. Passionate about 
              creating scalable, user-friendly solutions and eager to contribute as a full-time developer.
            </p>

            <div className={styles.heroButtons}>
              <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
                View Projects
              </a>
              <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
                Get in Touch
              </a>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroCard}>
              <div className={styles.contactGrid}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📞</div>
                  <div className={styles.contactInfo}>
                    <h4>Phone</h4>
                    <a href="tel:+918160419494">+91 8160419494</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>✉️</div>
                  <div className={styles.contactInfo}>
                    <h4>Email</h4>
                    <a href="mailto:surajprasad5656@gmail.com">surajprasad5656@gmail.com</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📍</div>
                  <div className={styles.contactInfo}>
                    <h4>Location</h4>
                    <p>Surat, Gujarat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
