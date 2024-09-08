import YouTube from 'react-youtube';

import styles from './VideoPlayer.module.css';

function VideoPlayer({ videoId }) {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      ecver: 2,
    },
  };
  return <YouTube opts={opts} className={styles.videoPlayer} videoId={videoId} />;
}

export default VideoPlayer;
