import React from 'react';
import { stats } from '../data/portfolioData';
import styles from '../styles/Stats.module.css';

const Stats = () => {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
