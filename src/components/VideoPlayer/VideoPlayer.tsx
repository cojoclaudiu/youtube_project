import YoutubePlayer from 'react-player/youtube';

import { useVideoId } from 'hooks/useVideoId';

import styles from './VideoPlayer.module.css';

function VideoPlayer() {
  const { videoId } = useVideoId();
  const url = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className={styles.videoPlayer}>
      <YoutubePlayer url={url} width="100%" height="100%" playing controls />
    </div>
  );
}

export { VideoPlayer };
