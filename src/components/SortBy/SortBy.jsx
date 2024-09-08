import styles from './SortBy.module.css';

export default function SortBy({ handleSelect }) {
  return (
    <label className={styles.sortByContainer} htmlFor="trending">
      Sort trending by:
      <select
        className={styles.sortByItemsContainer}
        name="trending"
        id="trending"
        onChange={handleSelect}
      >
        <optgroup label="Views">
          <option value="default">Default</option>
          <option value="most">Most</option>
          <option value="least">Least</option>
        </optgroup>
      </select>
    </label>
  );
}
