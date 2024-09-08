import useSearchInput from 'hooks/useSearchInput';
import { AiOutlineSearch } from 'react-icons/ai';

import styles from './SearchInputHeader.module.css';

function SearchInputHeader() {
  const {
    eventOnBlur,
    onInputSubmit,
    debouncedInputChanged,
    setVisible,
    visible,
    suggestions,
    onSelectedPredictionSubmit,
    input,
  } = useSearchInput();

  return (
    <div className={styles.headerContainerSearch}>
      <div className={styles.inputContainer} onBlur={eventOnBlur}>
        <form autoComplete="off" className={styles.searchForm} onSubmit={onInputSubmit}>
          <input
            id="searchInput"
            name="searchInput"
            className={styles.searchInput}
            type="search"
            placeholder="Search"
            onChange={debouncedInputChanged}
            onFocus={() => setVisible(true)}
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

export { SearchInputHeader };
