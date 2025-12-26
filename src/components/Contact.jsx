import React from 'react';
import { contactInfo } from '../data/portfolioData';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.cta}>
      <div className={styles.ctaContent}>
        <h2>Let's Build Something Amazing</h2>
        <p>I'm currently seeking full-time opportunities as a MERN Stack Developer. Let's connect and create something great together!</p>
        <div className={styles.ctaButtons}>
          <a href={`mailto:${contactInfo.email}`} className={`${styles.btn} ${styles.btnWhite}`}>
            Send Email
          </a>
          <a href={`tel:${contactInfo.phone}`} className={`${styles.btn} ${styles.btnOutline}`}>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
