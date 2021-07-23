import React from 'react';
import useSearchInput from 'hooks/useSearchInput';
import { AiOutlineSearch } from 'react-icons/ai';

import styles from './SearchInputHeader.module.css';

function SearchInputHeader() {
  const { input, onInputChange, onInputSubmit } = useSearchInput();

  return (
    <div className={styles.headerContainerSearch}>
      <div className={styles.inputContainer}>
        <form autoComplete="off" className={styles.searchForm} onSubmit={onInputSubmit}>
          <input
            id="searchInput"
            name="searchInput"
            className={styles.searchInput}
            type="search"
            placeholder="Search"
            onChange={onInputChange}
            value={input}
          />
          <button type="submit" className={styles.searchBtn}>
            <AiOutlineSearch />
          </button>
        </form>
        {/* {visible && (
          <section className={visible && styles.suggestionsContainer}>
            {suggestions.length === 0 && visible && (
              <div className={styles.placeholderItem}>Start typing...</div>
            )}
            <div
            >
              {input.length !== 0 &&
                suggestions.length > 0 &&
                suggestions.map((item) => (
                  <div key={item.replace(/ /g, '+')} className={styles.suggestionItem}>
                    {item}
                  </div>
                ))}
            </div>
          </section>
        )} */}
      </div>
    </div>
  );
}

export default SearchInputHeader;
