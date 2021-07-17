import React from 'react';
import styles from './SortBy.module.css';

export default function SortBy({ handleFilterASC, handleFilterDESC, handleFilterDefault }) {
  return (
    <label className={styles.sortByContainer} htmlFor="trending">
      Sort trending by:
      <select className={styles.sortByItemsContainer} name="trending" id="trending">
        <optgroup label="Views">
          <option value="Default" onClick={handleFilterDefault}>
            Default
          </option>
          <option value="Most" onClick={handleFilterASC}>
            Most
          </option>
          <option value="Least" onClick={handleFilterDESC}>
            Least
          </option>
        </optgroup>
      </select>
    </label>
  );
}
