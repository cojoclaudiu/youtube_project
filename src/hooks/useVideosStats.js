import { useState, useEffect } from 'react';
import axios from 'axios';

const useVideoStats = (videoId, youtubeVideo) => {
  const [status, setStatus] = useState({
    active: false,
    like: false,
    dislike: false,
  });

  const [info, setInfo] = useState({
    id: 'Id',
    title: 'Title Loading...',
    likes: 'Likes Loading...',
    dislikes: 'Dislikes Loading...',
    views: 'Views Loading...',
  });
  const [statsError, setStatsError] = useState(null);
  const [statsLoading, setStatsLoading] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchVideoStats = async () => {
      try {
        setStatsLoading(true);
        const response = await youtubeVideo(videoId).get('', { cancelToken: source.token });

        if (response.status === 200) {
          const getData = await response.data;
          setInfo({
            id: videoId,
            title: getData.items[0].snippet.title,
            likes: getData.items[0].statistics.likeCount,
            dislikes: getData.items[0].statistics.dislikeCount,
            views: getData.items[0].statistics.viewCount,
          });
        }
      } catch (err) {
        setStatsError(err);
      } finally {
        setStatsLoading(false);
      }
    };

    fetchVideoStats();

    return () => source.cancel();
  }, [videoId, youtubeVideo]);

  document.title = info.title;

  const handleLike = () => setStatus({ active: !status.active, like: true, dislike: false });

  const handleDislike = () => setStatus({ active: !status.active, like: false, dislike: true });

  return { handleLike, handleDislike, info, status, statsError, statsLoading };
};

export default useVideoStats;
