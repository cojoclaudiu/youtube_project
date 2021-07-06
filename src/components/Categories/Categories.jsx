import React from 'react';
import styles from '../../styles/components/Categories.module.css';

const categoriesData = require('../../data/headerCategories.json');

const Categories = () => {
  return (
    <div className={styles.categoriesRow}>
      {categoriesData.map((item, index) => {
        return (
          <a className={styles.categoryButton} href="/" key={`${item.name}-${index}`}>
            {item.name}
          </a>
        );
      })}
    </div>
  );
};

export default Categories;
