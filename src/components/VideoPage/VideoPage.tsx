import { VideoPlayer, RelatedVideos, VideoStats } from 'components';

import styles from './VideoPage.module.css';

function VideoPage() {
  return (
    <div className={styles.playerPage}>
      <div className={styles.videoContainer}>
        <VideoPlayer />
        <VideoStats />
      </div>
      <RelatedVideos />
    </div>
  );
}

export { VideoPage };
