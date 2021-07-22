import { useState, useEffect } from 'react';

// context

const useVideos = (videosAPI) => {
  const [videos, setVideos] = useState(null);
  const [channelId, setChannelId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    /* START   FETCH VIDEODATA FUNCTION */
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const response = await videosAPI.get();
        if (response.status === 200) {
          setVideos(response.data.items);
          setChannelId(response.data.items.map((item) => item.snippet.channelId));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
        setIsMounted(false);
      }
    };
    /*  END FETCH VIDEODATA FUNCTION */

    /* FUNCTION CALLS */
    fetchVideos();

    return () => setIsMounted(false);
  }, [videosAPI]);

  return { loading, error, videos, channelId, isMounted };
};

export default useVideos;
