import React from 'react';
import styles from './SortBy.module.css';

export default function SortBy({ handleFilterASC, handleFilterDESC, handleFilterDefault }) {
  return (
    <label className={styles.sortByContainer} htmlFor="trending">
      Sort trending by:
      <select className={styles.sortByItemsContainer} name="trending" id="trending">
        <optgroup label="Views">
          <option
            value="Default"
            onSelect={handleFilterDefault}
            onChange={handleFilterDefault}
            onClick={handleFilterDefault}
          >
            Default
          </option>
          <option
            value="Most"
            onSelect={handleFilterASC}
            onChange={handleFilterASC}
            onClick={handleFilterASC}
          >
            Most
          </option>
          <option
            value="Least"
            onSelect={handleFilterDESC}
            onChange={handleFilterDESC}
            onClick={handleFilterDESC}
          >
            Least
          </option>
        </optgroup>
      </select>
    </label>
  );
}
