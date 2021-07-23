import { useEffect, useState } from 'react';
import durationStamp from 'helpers/durationStamp';
import axios from 'axios';

const useDuration = (related, youtubeVideoAPI) => {
  const [duration, setDuration] = useState(null);
  const [durationError, setDurationError] = useState(null);
  const [durationLoading, setDurationLoading] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchDuration = async () => {
      try {
        setDurationLoading(true);
        const arr = related?.map(async (video) => {
          const vId = video.id.videoId;
          const response = await youtubeVideoAPI(vId).get('', { cancelToken: source.token });

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
    };
    fetchDuration();

    return () => source.cancel();
  }, [related, youtubeVideoAPI]);

  return { duration, durationError, durationLoading };
};
export default useDuration;
