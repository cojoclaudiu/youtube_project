import { useEffect, useState } from 'react';
import { relatedVideos } from 'api/youtube';

const useRelated = (id) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const getRelatedVideos = async () => {
      const response = await relatedVideos(id).get();
      const getData = await response.data.items.filter((obj) =>
        Object.prototype.hasOwnProperty.call(obj, 'snippet'),
      );
      setRelated(getData);
    };
    getRelatedVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return related;
};

export default useRelated;
