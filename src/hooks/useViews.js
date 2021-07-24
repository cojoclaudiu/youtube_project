import { useEffect, useState } from 'react';
import { statsFormat } from 'helpers/formatCounts';
import axios from 'axios';

const useViews = (related, youtubeVideoAPI) => {
  const [views, setViews] = useState(null);
  const [viewsError, setViewsError] = useState(null);
  const [viewsLoading, setViewsLoading] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    /* START FETCH VIEWS */
    const fetchViews = async () => {
      try {
        setViewsLoading(true);
        const arr = related?.map(async (video) => {
          const vId = video.id.videoId;
          const response = await youtubeVideoAPI(vId).get('', { cancelToken: source.token });

          if (response.status === 200) {
            return statsFormat(response.data.items[0].statistics.viewCount);
          }
          return false;
        });
        const resolved = await Promise.all(arr);
        setViews(...[resolved]);
      } catch (err) {
        setViewsError(err);
      } finally {
        setViewsLoading(false);
      }
    };
    /** End FETCH VIEWS */
    fetchViews();

    return () => {
      source.cancel('useViews  got unmounted');
    };
  }, [related, youtubeVideoAPI]);

  return { views, viewsError, viewsLoading };
};

export default useViews;
