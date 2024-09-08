import { Link } from 'react-router-dom';

import styles from './Categories.module.css';

import categoriesData from 'data/headerCategories.json';

function Categories() {
  return (
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
}

export default Categories;
