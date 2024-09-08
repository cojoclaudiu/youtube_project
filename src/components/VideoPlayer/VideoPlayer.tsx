import YoutubePlayer from 'react-player/youtube';

import styles from './VideoPlayer.module.css';
import { useVideoId } from 'hooks/useVideoId';

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
