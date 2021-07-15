import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchVideo } from 'api/youtube';

const useSearchResults = () => {
  const searchQuery = useLocation()
    .search.replace('?category_query=', '')
    .replace('?search=', '')
    .replace(/\+/g, ' ');

  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getSearchData(keyword) {
      const response = await searchVideo(keyword).get();
      const getData = await response.data.items.filter((item) => item.id.videoId !== undefined);
      setResults(getData);
    }
    document.title = searchQuery;
    getSearchData(searchQuery);
  }, [searchQuery]);

  return results;
};

export default useSearchResults;
