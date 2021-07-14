import { useEffect, useState } from 'react';
import { youtubeVideo } from 'api/youtube';
import durationStamp from 'helpers/durationStamp';

const useDuration = (videos) => {
  const [duration, setDuration] = useState([]);

  useEffect(() => {
    async function getVideoData() {
      const arr = videos.map(async (video) => {
        const vId = video.id.videoId;
        const response = await youtubeVideo(vId).get();
        return durationStamp(response.data.items[0].contentDetails.duration);
      });
      const resolved = await Promise.all(arr);
      setDuration(...[resolved]);
    }
    getVideoData();
  }, [videos]);

  return duration;
};

export default useDuration;
