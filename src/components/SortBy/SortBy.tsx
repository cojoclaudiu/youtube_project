import { ComponentProps } from 'react';
import styles from './SortBy.module.css';

type SortByProps = ComponentProps<'select'>;

function SortBy({ ...props }: SortByProps) {
  return (
    <label className={styles.sortByContainer} htmlFor="trending">
      Sort trending by:
      <select className={styles.sortByItemsContainer} name="trending" id="trending" {...props}>
        <optgroup label="Views">
          <option value="default">Default</option>
          <option value="most">Most</option>
          <option value="least">Least</option>
        </optgroup>
      </select>
    </label>
  );
}

export { SortBy };
