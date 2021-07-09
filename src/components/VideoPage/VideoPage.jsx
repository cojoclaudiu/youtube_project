import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './VideoPage.module.css';

const VideoPage = () => {
  const videoId = useLocation().search.replace('?v=', '');

  // useEffect(() => console.log(videoId), [videoId]);
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
    </div>
  );
};

export default VideoPage;
