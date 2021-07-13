import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import prediction from 'helpers/searchPrediction';
import debounce from 'lodash.debounce';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchHeader.module.css';

const SearchHeader = () => {
  const history = useHistory();

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');

  // Prediction function
  const onQueryChange = useCallback((e) => {
    setQuery(e.target.value);

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
    setQuery(selectedSuggestion);
  };

  // IF TRUE SHOW SUGGESTION CONTAINER
  const suggestionContainer = useCallback(() => {
    setShowSuggestions((prev) => !prev);
  }, []);

  // ON CLICK SUGGESTIONS > SEARCH RESULTS PAGE
  const selectSuggestion = useCallback(
    (e) => {
      e.preventDefault();
      history.push(`results?search=${e.target.textContent}`.replace(/ /g, '+'));
      setShowSuggestions((prev) => !prev);
      setSelectedSuggestion(e.target.textContent);
    },

    [history],
  );
  console.log(query);

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
                  key={item}
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
};

export default SearchHeader;
