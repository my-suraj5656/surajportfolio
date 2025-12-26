import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <div className={styles.navLogo}>Suraj</div>
        <ul className={styles.navLinks}>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Education</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
