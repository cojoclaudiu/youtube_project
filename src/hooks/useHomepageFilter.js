import { useEffect, useState, useContext } from 'react';
import { HomeVideosContext } from 'context/HomeVideosContext';

const useHomepageFilter = (videos) => {
  const [store, setStore] = useState([]);
  const { keyword } = useContext(HomeVideosContext);
  useEffect(() => setStore(videos), [videos]);

  return { store, setStore, keyword };
};

export default useHomepageFilter;
