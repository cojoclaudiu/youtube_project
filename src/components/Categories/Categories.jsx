import React from 'react';
import styles from './Categories.module.css';

const categoriesData = require('data/headerCategories.json');

const Categories = () => (
  <div className={styles.categoriesRow}>
    {categoriesData.map((item) => (
      <a className={styles.categoryButton} href="/" key={`${item.name}`}>
        {item.name}
      </a>
    ))}
  </div>
);

export default Categories;
