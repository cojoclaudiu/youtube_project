import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchHeader.module.css';

const SearchHeader = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  const onHandleChange = (e) => {
    setTimeout(() => setQuery(e.target.value), 1000);
  };

  useEffect(() => {
    const delay = () => setTimeout(() => onHandleChange, 1000);
    const timerId = delay();
    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`results?search=${query}`);
  };

  return (
    <div className={styles.headerContainerSearch}>
      <form autoComplete="off" className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          name="searchInput"
          className={styles.searchInput}
          type="search"
          placeholder="Search"
          onChange={onHandleChange}
        />
        <button type="button" className={styles.searchBtn}>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchHeader;
