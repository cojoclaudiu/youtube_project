import { useEffect, useState } from 'react';

const useRelated = (videos, id) => {
  const [related, setRelated] = useState(null);
  const [relatedError, setRelatedError] = useState(null);
  const [relatedLoading, setRelatedLoading] = useState(null);
  const [relatedMounted, setRelatedMounted] = useState(true);

  useEffect(() => {
    const getRelatedVideos = async () => {
      try {
        setRelatedLoading(true);
        const response = await videos(id).get();
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

    return () => setRelatedMounted(false);
  }, [videos, id]);

  return { related, relatedError, relatedLoading, relatedMounted };
};

export default useRelated;

// import { relatedVideos } from 'api/youtube';

// const useRelated = (id) => {
//   const [related, setRelated] = useState([]);

//   useEffect(() => {
//     const getRelatedVideos = async () => {
//       const response = await relatedVideos(id).get();
//       const getData = await response.data.items.filter((obj) =>
//         Object.prototype.hasOwnProperty.call(obj, 'snippet'),
//       );
//       setRelated(getData);
//     };
//     getRelatedVideos();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id]);

//   return related;
// };

// export default useRelated;
