import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import useWindowSize from 'hooks/useWindowSize';
import useSearchResults from 'hooks/useSearchResults';
import useDuration from 'hooks/useDuration';

import styles from './SearchFeed.module.css';

function SearchFeed() {
  const width = useWindowSize() > 550;
  const results = useSearchResults();
  const duration = useDuration(results);

  return (
    <div className={styles.feedContainer}>
      <div className={styles.itemsFeed}>
        {results.map(
          (item, i) =>
            item.id.videoId && (
              <Link
                key={item.snippet.title + Math.random().toFixed(5)}
                to={`/watch?v=${item.id.videoId}`}
              >
                <div className={styles.videoContainer}>
                  <div className={styles.thumbnailContainer}>
                    <img
                      className={styles.thumbnailImage}
                      src={
                        width
                          ? item.snippet.thumbnails.medium.url
                          : item.snippet.thumbnails.high.url
                      }
                      alt={item.snippet.title}
                    />
                    <div className={styles.timeStamp}>{duration[i]}</div>
                  </div>
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
