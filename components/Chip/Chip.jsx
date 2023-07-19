import React from 'react';
import styles from './Chip.module.css';

const Chip = ({ label }) => {
  return (
    <div className={styles.chip}>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default Chip;