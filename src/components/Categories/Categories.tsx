import { Link } from 'react-router-dom';

import styles from './Categories.module.css';

import { headerCategories } from 'data/headerCategories';

function Categories() {
  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.row}>
        {headerCategories.map((item) => (
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

export { Categories };
