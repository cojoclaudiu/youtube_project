import { useEffect, useState } from 'react';
import axios from 'axios';

const useRelated = (videos, id) => {
  const [related, setRelated] = useState(null);
  const [relatedError, setRelatedError] = useState(null);
  const [relatedLoading, setRelatedLoading] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getRelatedVideos = async () => {
      try {
        setRelatedLoading(true);
        const response = await videos(id).get('', { cancelToken: source.token });
        if (response.status === 200)
          setRelated(
            response.data.items.filter((obj) =>
              Object.prototype.hasOwnProperty.call(obj, 'snippet'),
            ),
          );
      } catch (err) {
        setRelatedError(err);
      } finally {
        setRelatedLoading(false);
      }
    };
    getRelatedVideos();

    return () => source.cancel();
  }, [videos, id]);

  return { related, relatedError, relatedLoading };
};

export default useRelated;
