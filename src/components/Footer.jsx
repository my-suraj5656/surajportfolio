import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.socialLinks}>
            <a href="mailto:surajprasad5656@gmail.com" className={styles.socialLink}>✉️</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>💼</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>🐙</a>
          </div>
          <p>&copy; {currentYear} Suraj R Prasad. Built with passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
