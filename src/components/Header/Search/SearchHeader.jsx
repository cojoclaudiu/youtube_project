import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchHeader.module.css';

const SearchHeader = () => (
  <div className={styles.headerContainerSearch}>
    <form className={styles.searchForm}>
      <input className={styles.searchInput} type="search" placeholder="Search" />
      <button type="button" className={styles.searchBtn}>
        <AiOutlineSearch />
      </button>
    </form>
  </div>
);

export default SearchHeader;
