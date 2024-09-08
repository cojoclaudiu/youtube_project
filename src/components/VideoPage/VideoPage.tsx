import { useLocation } from 'react-router-dom';
import { VideoPlayer, RelatedVideos, VideoStats } from 'components';

import styles from './VideoPage.module.css';

function VideoPage() {
  const videoId = useLocation().search.replace('?v=', '');

  return (
    <div className={styles.playerPage}>
      <div className={styles.videoContainer}>
        <VideoPlayer videoId={videoId} />
        <VideoStats videoId={videoId} />
      </div>
      <RelatedVideos addId={videoId} />
    </div>
  );
}

export { VideoPage };
