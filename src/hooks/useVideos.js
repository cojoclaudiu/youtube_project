import { useEffect, useState } from 'react';
import { youtube } from 'api/youtube';

const useVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function ytData() {
      const response = await youtube.get();
      setVideos(response.data.items);
    }

    document.title = 'Homepage - Trending';

    ytData();
  }, []);
  return videos;
};

export default useVideos;
