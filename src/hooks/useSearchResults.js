import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const useSearchResults = (searchVideo) => {
  const searchQuery = useLocation()
    .search.replace('?category_query=', '')
    .replace('?search=', '')
    .replace(/\+/g, ' ');

  const [searchResults, setSearchResults] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const [searchLoading, setSearchLoading] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchSearchResults = async (query) => {
      try {
        setSearchLoading(true);
        const response = await searchVideo(query).get('', { cancelToken: source.token });
        if (response.status === 200) {
          const getData = await response.data.items.filter((item) => item.id.videoId !== undefined);
          setSearchResults(getData);
        }
      } catch (err) {
        setSearchError(err);
      } finally {
        setSearchLoading(false);
      }
    };
    fetchSearchResults(searchQuery);

    return () => source.cancel();
  }, [searchVideo, searchQuery]);

  return { searchResults, searchError, searchLoading };
};

export default useSearchResults;

// import { searchVideo } from 'api/youtube';

// const useSearchResults = () => {
//   const searchQuery = useLocation()
//     .search.replace('?category_query=', '')
//     .replace('?search=', '')
//     .replace(/\+/g, ' ');

//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     async function getSearchData(keyword) {
//       const response = await searchVideo(keyword).get();
//       const getData = await response.data.items.filter((item) => item.id.videoId !== undefined);
//       setResults(getData);
//     }
//     document.title = searchQuery;
//     getSearchData(searchQuery);
//   }, [searchQuery]);

//   return results;
// };

// export default useSearchResults;
