import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash.debounce';
import prediction from 'helpers/searchPrediction';
import { AiOutlineSearch } from 'react-icons/ai';

import styles from './SearchInputHeader.module.css';

function SearchInputHeader() {
  const history = useHistory();

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');

  // Prediction function

  const onQueryChange = useCallback((e) => {
    const onTypeSuggest = async () => {
      const response = await prediction(e.target.value);
      setSuggestions(response);
    };
    onTypeSuggest();
  }, []);

  // Debounce for search input
  const debouncedQueryChanged = useMemo(() => debounce(onQueryChange, 200), [onQueryChange]);
  useEffect(() => () => debouncedQueryChanged.cancel(), [debouncedQueryChanged]);

  // on Submit search input
  const onQuerySubmit = (e) => {
    e.preventDefault();
    history.push(`results?search=${query}`);
    setShowSuggestions(false);
  };

  // IF TRUE SHOW SUGGESTION CONTAINER
  const suggestionContainer = () => setShowSuggestions((prev) => !prev);

  // ON CLICK SUGGESTIONS > SEARCH RESULTS PAGE
  const selectSuggestion = (e) => {
    e.preventDefault();
    history.push(`results?search=${e.target.textContent}`.replace(/ /g, '+'));
    setShowSuggestions((prev) => !prev);
    setSelectedSuggestion(e.target.textContent);
  };

  useEffect(() => setQuery(selectedSuggestion), [selectedSuggestion]);

  return (
    <div className={styles.headerContainerSearch}>
      <div className={styles.inputContainer}>
        <form autoComplete="off" className={styles.searchForm} onSubmit={onQuerySubmit}>
          <input
            id="searchInput"
            name="searchInput"
            className={styles.searchInput}
            type="search"
            placeholder="Search"
            onChange={debouncedQueryChanged}
            onFocus={suggestionContainer}
          />
          <button type="button" className={styles.searchBtn} onClick={onQuerySubmit}>
            <AiOutlineSearch />
          </button>
        </form>
        {showSuggestions && (
          <section className={showSuggestions && styles.suggestionsContainer}>
            {suggestions.length === 0 && showSuggestions && (
              <div className={styles.placeholderItem}>Start typing...</div>
            )}
            {suggestions.length > 0 &&
              suggestions.map((item) => (
                <div
                  key={item.replace(/ /g, '+')}
                  role="button"
                  tabIndex={0}
                  className={styles.suggestionItem}
                  onClick={selectSuggestion}
                  onKeyDown={selectSuggestion}
                >
                  {item}
                </div>
              ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default SearchInputHeader;
