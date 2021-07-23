import React from 'react';
import { Link } from 'react-router-dom';

// custom hooks
import useDuration from 'hooks/useDuration';
import useViews from 'hooks/useViews';
import useRelated from 'hooks/useRelated';
import { relatedVideos, youtubeVideo } from 'api/youtube';

//  components
import DurationVideo from 'components/DurationVideo/DurationVideo';

import styles from './RelatedVideos.module.css';

function RelatedVideos({ addId }) {
  const { related } = useRelated(relatedVideos, addId);
  const { duration } = useDuration(related, youtubeVideo);
  const { views } = useViews(related, youtubeVideo);

  return (
    <div className={styles.sidebarRelated}>
      {related &&
        related.length > 0 &&
        related.map((video, index) => (
          <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
            <div className={styles.videoContainer}>
              <div className={styles.videoDetails}>
                <div className={styles.thumbnailContainer}>
                  <img
                    className={styles.thumbnailImage}
                    alt={video.snippet.id}
                    src={video.snippet.thumbnails.medium.url}
                  />
                  <DurationVideo duration={duration && duration.length > 0 && duration[index]} />
                </div>
                <div className={styles.videoStats}>
                  <h3 className={styles.videoTitle}>{video.snippet.title}</h3>
                  <div className={styles.channelTitle}>{video.snippet.channelTitle}</div>
                  <div className={styles.views}>
                    {views && views.length > 0 && views[index]} views
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default RelatedVideos;
