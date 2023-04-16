import React from 'react';
import styles from './Discover.module.scss';

export const Dropdowns = () => {
  return (
    <div className={styles.droprow}>
      <div className={styles.dropdown}>
        <select id="date">
          <option value="01">Recruiting</option>
          <option value="02">02</option>
        </select>
      </div>
      <div className={styles.dropdown}>
        <select id="time">
          <option value="00">App</option>
          <option value="01">01</option>
        </select>
      </div>
      <div className={styles.dropdown}>
        <select id="tags">
          <option value="tag1">Tags</option>
          <option value="tag2">Tag 2</option>
        </select>
      </div>
      <div className={styles.dropdown}>
        <select id="tags">
          <option value="tag1">Clubsize</option>
          <option value="tag2">Tag 2</option>
        </select>
      </div>
    </div>
  );
};
