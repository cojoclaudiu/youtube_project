import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { youtubeVideo } from 'api/youtube';
import styles from './VideoPage.module.css';

const VideoPage = () => {
  const videoId = useLocation().search.replace('?v=', '');
  const [info, setInfo] = useState({
    title: 'Title Loading...',
    likes: 'Likes Loading...',
    dislikes: 'Dislikes Loading...',
    views: 'Views Loading...',
  });

  useEffect(() => {
    async function videoData() {
      const request = await youtubeVideo(videoId).get(``);
      setInfo({
        title: request.data.items[0].snippet.title,
        likes: request.data.items[0].statistics.likeCount,
        dislikes: request.data.items[0].statistics.dislikeCount,
        views: request.data.items[0].statistics.viewCount,
      });
    }

    videoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.playerContainer}>
      <iframe
        title={videoId}
        id="ytplayer"
        type="text/html"
        width="1280"
        height="720"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
      />
      <div>{info.title}</div>
      <div>Like: {info.likes}</div>
      <div>Dislike: {info.dislikes}</div>
      <div>Views: {info.views}</div>
    </div>
  );
};

export default VideoPage;
