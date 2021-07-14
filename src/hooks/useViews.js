import { useEffect, useState } from 'react';
import { statsFormat } from 'helpers/formatCounts';
import { youtubeVideo } from 'api/youtube';

const useViews = (videos) => {
  const [views, setViews] = useState([]);

  useEffect(() => {
    const getViews = async () => {
      const arr = videos.map(async (video) => {
        const vId = video.id.videoId;
        const response = await youtubeVideo(vId).get();
        return statsFormat(response.data.items[0].statistics.viewCount);
      });
      const resolved = await Promise.all(arr);
      setViews(...[resolved]);
      return arr;
    };
    getViews();
  }, [videos]);
  return views;
};

export default useViews;
