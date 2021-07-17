import { useEffect, useState } from 'react';
import useVideos from 'hooks/useVideos';
import useHomepageFilter from 'hooks/useHomepageFilter';

const useSortBy = () => {
  const videos = useVideos();
  const { store, setStore, keyword } = useHomepageFilter(videos);
  const [toggle, setToggle] = useState(true);
  const [defaultStore, setDefaultStore] = useState([]);

  useEffect(() => {
    const def = [...store];
    setDefaultStore(def);
  }, [store]);

  const handleFilterASC = (e) => {
    e.preventDefault();
    const newStore = store.sort((a, b) => b.statistics.viewCount - a.statistics.viewCount);
    setStore(newStore);
    setToggle(!toggle);
  };

  const handleFilterDESC = (e) => {
    e.preventDefault();
    const newStore = store.sort((a, b) => a.statistics.viewCount - b.statistics.viewCount);
    setStore(newStore);
    setToggle(!toggle);
  };

  const handleFilterDefault = (e) => {
    e.preventDefault();
    setStore(defaultStore);
    setToggle(!toggle);
  };

  return { store, keyword, handleFilterASC, handleFilterDESC, handleFilterDefault };
};

export default useSortBy;
