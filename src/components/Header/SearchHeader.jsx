import React from 'react';
import styles from '../../styles/components/SearchHeader.module.css';

import { AiOutlineSearch } from 'react-icons/ai';

const SearchHeader = () => {
  return (
    <div className={styles.headerContainerSearch}>
      <form className={styles.searchForm}>
        <input className={styles.searchInput} type="search" placeholder="Search" />
        <button className={styles.searchBtn}>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchHeader;
