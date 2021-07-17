import React from 'react';
import styles from './SortBy.module.css';

export default function SortBy({ handleFilterASC, handleFilterDESC, handleFilterDefault }) {
  return (
    <label className={styles.sortByContainer} htmlFor="trending">
      Sort trending by:
      <select className={styles.sortByItemsContainer} name="trending" id="trending">
        <optgroup label="Views">
          <option value="Default" onTouchStart={handleFilterDefault} onClick={handleFilterDefault}>
            Default
          </option>
          <option value="Most" onTouchStart={handleFilterASC} onClick={handleFilterASC}>
            Most
          </option>
          <option value="Least" onTouchStart={handleFilterDESC} onClick={handleFilterDESC}>
            Least
          </option>
        </optgroup>
      </select>
    </label>
  );
}
