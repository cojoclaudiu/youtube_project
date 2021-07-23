import { useEffect, useState } from 'react';
import durationStamp from 'helpers/durationStamp';

const useDuration = (related, youtubeVideoAPI) => {
  const [duration, setDuration] = useState(null);
  const [durationError, setDurationError] = useState(null);
  const [durationLoading, setDurationLoading] = useState(null);
  const [durationMounted, setDurationMounted] = useState(true);

  useEffect(() => {
    const fetchDuration = async () => {
      if (related && related.length > 0) {
        try {
          setDurationLoading(true);
          const arr = related.map(async (video) => {
            const vId = video.id.videoId;
            const response = await youtubeVideoAPI(vId).get();

            if (response.status === 200) {
              return durationStamp(response.data.items[0].contentDetails.duration);
            }
            return false;
          });
          const resolved = await Promise.all(arr);
          setDuration(...[resolved]);
        } catch (err) {
          setDurationError(err);
        } finally {
          setDurationLoading(false);
        }
      }
    };
    fetchDuration();

    return () => setDurationMounted(false);
  }, [related, youtubeVideoAPI]);

  return { duration, durationError, durationLoading, durationMounted };
};
export default useDuration;
