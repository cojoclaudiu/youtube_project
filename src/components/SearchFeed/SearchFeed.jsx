import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import _ from 'lodash';
import useWindowSize from 'hooks/useWindowSize';
import { searchVideo } from 'api/youtube';

import styles from './SearchFeed.module.css';

const SearchFeed = () => {
  const width = useWindowSize() > 550;

  const searchQuery = useLocation()
    .search.replace('?category_query=', '')
    .replace('?search=', '')
    .replace(/\+/g, ' ');

  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getSearchData(keyword) {
      const response = await searchVideo(keyword).get();
      const getData = await response.data.items;
      setResults(getData);
    }
    document.title = searchQuery;
    getSearchData(searchQuery);
  }, [searchQuery]);

  return (
    <div className={styles.feedContainer}>
      <div className={styles.itemsFeed}>
        {results.map(
          (item) =>
            item.id.videoId && (
              <Link key={item.snippet.title} to={`/watch?v=${item.id.videoId}`}>
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
};

export default SearchFeed;
