import { useEffect, useState } from 'react';
import useHomepageFilter from 'hooks/useHomepageFilter';


const useSortBy = (videos) => {
  const { store, setStore, keyword } = useHomepageFilter(videos);
  const [toggle, setToggle] = useState(true);
  const [defaultStore, setDefaultStore] = useState([]);

  useEffect(() => {
    const def = [...store];
    setDefaultStore(def);
  }, [store]);

  const handleSelect = (e) => {
    if (e.target.value === 'default') {
      e.preventDefault();
      setStore(defaultStore);
      setToggle(!toggle);
    }

    if (e.target.value === 'most') {
      e.preventDefault();
      const newStore = store.sort((a, b) => b.statistics.viewCount - a.statistics.viewCount);
      setStore(newStore);
      setToggle(!toggle);
    }

    if (e.target.value === 'least') {
      e.preventDefault();
      const newStore = store.sort((a, b) => a.statistics.viewCount - b.statistics.viewCount);
      setStore(newStore);
      setToggle(!toggle);
    }
  };

  return { store, keyword, handleSelect };
};

export default useSortBy;
