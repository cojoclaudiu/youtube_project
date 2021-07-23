import { useState, useEffect, useContext } from 'react';
import { HomeVideosContext } from 'context/HomeVideosContext';
import axios from 'axios';

// context

const useVideos = (videosAPI) => {
  const { keyword } = useContext(HomeVideosContext);

  const [videos, setVideos] = useState(null);
  const [store, setStore] = useState([]);

  const [channelId, setChannelId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [toggle, setToggle] = useState(true);

  const handleSelect = (e) => {
    e.preventDefault();
    if (e.target.value === 'default') {
      setStore([...videos]);
      setToggle(!toggle);
    }

    if (e.target.value === 'most') {
      setStore([...videos].sort((a, b) => b.statistics.viewCount - a.statistics.viewCount));
      setToggle(!toggle);
    }

    if (e.target.value === 'least') {
      setStore([...videos].sort((a, b) => a.statistics.viewCount - b.statistics.viewCount));
      setToggle(!toggle);
    }
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    /* START   FETCH VIDEODATA FUNCTION */
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await videosAPI.get('', { cancelToken: source.token });
        if (response.status === 200) {
          setVideos(response.data.items);
          setStore(response.data.items);
          setChannelId(response.data.items.map((item) => item.snippet.channelId));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    /*  END FETCH VIDEODATA FUNCTION */

    /* FUNCTION CALLS */
    fetchVideos();

    return () => source.cancel();
  }, [videosAPI]);

  return { loading, error, videos, channelId, store, setStore, handleSelect, keyword };
};

export default useVideos;
