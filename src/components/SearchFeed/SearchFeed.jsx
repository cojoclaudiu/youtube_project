import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { searchVideo } from 'api/youtube';

import styles from './SearchFeed.module.css';

const SearchFeed = () => {
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
    getSearchData(searchQuery);
  }, [searchQuery]);

  return (
    <div className={styles.feedContainer}>
      {results.map((item) => (
        <Link key={item.snippet.title} to={`/watch?v=${item.id.videoId}`}>
          <div className={styles.resultContainer}>
            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchFeed;
