import useSearchInput from 'hooks/useSearchInput';
import { AiOutlineSearch } from 'react-icons/ai';

import styles from './SearchInputHeader.module.css';

function SearchInputHeader() {
  const {
    eventOnBlur,
    onInputSubmit,
    onInputChange,
    setVisible,
    visible,
    suggestions,
    onSelectedPredictionSubmit,
    input,
    setInput,
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
            onChange={onInputChange}
            value={input}
            onFocus={() => setVisible(true)}
          />
          <button type="submit" className={styles.searchBtn}>
            <AiOutlineSearch />
          </button>
        </form>
        {visible && (
          <section className={visible && styles.suggestionsContainer}>
            {suggestions.length === 0 && visible && (
              <div className={styles.placeholderItem}>Start typing...</div>
            )}
            <div role="button" tabIndex={0} onClick={onSelectedPredictionSubmit}>
              {input.length !== 0 &&
                suggestions.length > 0 &&
                suggestions.map((item) => (
                  <div key={item} className={styles.suggestionItem} onClick={() => setInput(item)}>
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
