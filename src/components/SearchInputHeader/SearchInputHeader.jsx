import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash.debounce';
import prediction from 'helpers/searchPrediction';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchInputHeader.module.css';

function SearchInputHeader() {
  const history = useHistory();

  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');

  // SET INPUT ON CHANGE
  const onInputChange = useCallback(
    (e) => {
      e.preventDefault();
      setInput(e.target.value);

      // GET PREDICTIONS
      const onTypeSuggest = async () => {
        const response = await prediction(input);
        setSuggestions(response);
      };

      onTypeSuggest();
    },
    [input],
  );

  // ONSELECTED PREDICTION SUBMIT I WANT TO PUSH SELECTED ITEM INTO HISTORY ADDRESS
  // e prevent default on submit
  // I want to set the sugggestion if you click inside the input change suggestions

  const onSelectedPredictionSubmit = (e) => {
    e.preventDefault();
    history.push(`results?search=${e.target.textContent}`.replace(/ /g, '+'));
    setSelectedSuggestion(e.target.textContent);
    setVisible(false);
    setInput(e.target.textContent);
  };

  // INPUT SUBMIT / BUTTON SUBMIT
  const onInputSubmit = (e) => {
    e.preventDefault();
    history.push(`results?search=${input}`);
  };

  console.log(input, selectedSuggestion, setSelectedSuggestion);
  // Debounce for search input
  const debouncedInputChanged = useMemo(() => debounce(onInputChange, 200), [onInputChange]);
  useEffect(() => () => debouncedInputChanged.cancel(), [debouncedInputChanged]);

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
            onChange={debouncedInputChanged}
            // onFocus={() => setVisible(true)}
            onMouseUp={() => setVisible((prev) => !prev)}
          />
          <button type="button" className={styles.searchBtn} onClick={onInputSubmit}>
            <AiOutlineSearch />
          </button>
        </form>
        {visible && (
          <section className={visible && styles.suggestionsContainer}>
            {suggestions.length === 0 && visible && (
              <div className={styles.placeholderItem}>Start typing...</div>
            )}
            <div
              role="button"
              tabIndex={0}
              onClick={onSelectedPredictionSubmit}
              onKeyDown={onSelectedPredictionSubmit}
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
        )}
      </div>
    </div>
  );
}

export default SearchInputHeader;
