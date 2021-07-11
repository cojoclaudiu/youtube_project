import React, { useState, useMemo, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchHeader.module.css';

const SearchHeader = () => {
  const history = useHistory();
  const location = useLocation().search;
  console.log(location);
  const [query, setQuery] = useState('');

  const onQueryChange = (e) => setQuery(e.target.value);
  const debouncedQueryChanged = useMemo(() => debounce(onQueryChange, 100), []);
  useEffect(() => () => debouncedQueryChanged.cancel(), [debouncedQueryChanged]);

  const onQuerySubmit = (e) => {
    e.preventDefault();
    history.push(`results?search=${query}`);
  };

  return (
    <div className={styles.headerContainerSearch}>
      <form autoComplete="off" className={styles.searchForm} onSubmit={onQuerySubmit}>
        <input
          id="searchInput"
          name="searchInput"
          className={styles.searchInput}
          type="search"
          placeholder="Search"
          onChange={debouncedQueryChanged}
        />
        <button type="button" className={styles.searchBtn}>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchHeader;
