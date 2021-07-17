import { useState, useEffect } from 'react';
import { youtubeVideo } from 'api/youtube';

const useVideoStats = (videoId) => {
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

  useEffect(() => {
    async function videoData() {
      const response = await youtubeVideo(videoId).get(``);
      const getData = await response.data;

      setInfo({
        id: videoId,
        title: getData.items[0].snippet.title,
        likes: getData.items[0].statistics.likeCount,
        dislikes: getData.items[0].statistics.dislikeCount,
        views: getData.items[0].statistics.viewCount,
      });
    }

    videoData();
  }, [videoId]);

  useEffect(() => {
    function upDateTitle() {
      document.title = info.title;
    }
    upDateTitle();
  });

  const handleLike = () => setStatus( { active: !status.active, like: true, dislike: false });

  const handleDislike = () => setStatus({ active: !status.active, like: false, dislike: true });

  return { handleLike, handleDislike, info, status };
};

export default useVideoStats;
