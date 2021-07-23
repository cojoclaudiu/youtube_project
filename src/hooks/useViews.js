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
      if (related && related.length > 0) {
        try {
          setViewsLoading(true);
          const arr = related.map(async (video) => {
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
      }
    };
    /** End FETCH VIEWS */
    fetchViews();

    return () => source.cancel();
  }, [related, youtubeVideoAPI]);

  return { views, viewsError, viewsLoading };
};

export default useViews;

// if (videos && videos.length > 0) {
//   try {
//     setLoadingAvatar(true);
//     const arr = videos.map(async (video) => {
//       const chId = video.snippet.channelId;
//       const response = await avatarAPI(chId).get();
//       if (response.status === 200) {
//         return response.data.items[0].snippet.thumbnails.default.url;
//       }
//       return false;
//     });
//     const resolved = await Promise.all(arr);
//     setAvatarURL(...[resolved]);
//   } catch (err) {
//     setErrorAvatar(err);
//   } finally {
//     setLoadingAvatar(false);
//     setAvatarMounted(false);
//   }
// }
// };

// const useViews = (videos) => {
//   const [views, setViews] = useState([]);

//   useEffect(() => {
//     const getViews = async () => {
//       const arr = videos.map(async (video) => {
//         const vId = video.id.videoId;
//         const response = await youtubeVideo(vId).get();
//         return statsFormat(response.data.items[0].statistics.viewCount);
//       });
//       const resolved = await Promise.all(arr);
//       setViews(...[resolved]);
//       return arr;
//     };
//     getViews();
//   }, [videos]);
//   return views;
// };

// export default useViews;
