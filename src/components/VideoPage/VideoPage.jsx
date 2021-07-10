import React from 'react';
import { useLocation } from 'react-router-dom';
import VideoPlayer from 'components/VideoPlayer/VideoPlayer';
import RelatedVideos from 'components/RelatedVideos/RelatedVideos';
import VideoStats from 'components/VideoStats/VideoStats';

import styles from './VideoPage.module.css';

const VideoPage = () => {
  const videoId = useLocation().search.replace('?v=', '');

  return (
    <div className={styles.playerPage}>
      <div className={styles.videoContainer}>
        <VideoPlayer id={videoId} />
        <VideoStats videoId={videoId} />
      </div>
      <RelatedVideos addId={videoId} />
    </div>
  );
};

export default VideoPage;
