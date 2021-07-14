import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import useWindowSize from 'hooks/useWindowSize';

import useSearchResults from 'hooks/useSearchResults';

import styles from './SearchFeed.module.css';

function SearchFeed() {
  const width = useWindowSize() > 550;
  const results = useSearchResults();

  return (
    <div className={styles.feedContainer}>
      <div className={styles.itemsFeed}>
        {results.map(
          (item) =>
            item.id.videoId && (
              <Link key={item.snippet.title.replace(/ /g, '?')} to={`/watch?v=${item.id.videoId}`}>
                <div className={styles.videoContainer}>
                  <img
                    className={styles.videoImage}
                    src={
                      width ? item.snippet.thumbnails.medium.url : item.snippet.thumbnails.high.url
                    }
                    alt={item.snippet.title}
                  />
                  <div className={styles.videoDetails}>
                    <h2 className={styles.title}>{_.unescape(item.snippet.title)}</h2>
                    <p className={styles.description}>{_.unescape(item.snippet.description)}</p>
                  </div>
                </div>
              </Link>
            ),
        )}
      </div>
    </div>
  );
}

export default SearchFeed;
