import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Categories.module.css';

const categoriesData = require('data/headerCategories.json');

const Categories = () => (
  <div className={styles.categoriesContainer}>
    <div className={styles.row}>
      {categoriesData.map((item) => (
        <Link
          className={styles.categoryButton}
          to={`/results?category_query=${item.name.replace(/ /g, '+')}`}
          key={`${item.name}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>
);

export default Categories;
