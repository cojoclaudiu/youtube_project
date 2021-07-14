import React from 'react';
import { Link } from 'react-router-dom';
import useDuration from 'Hooks/useDuration';
import useViews from 'Hooks/useViews';
import useRelated from 'Hooks/useRelated';

import styles from './RelatedVideos.module.css';

function RelatedVideos({ addId }) {
  const related = useRelated(addId);
  const duration = useDuration(related);
  const views = useViews(related);

  return (
    <div className={styles.sidebarRelated}>
      {related.map((video, index) => (
        <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
          <div className={styles.videoContainer}>
            <div className={styles.videoDetails}>
              <div className={styles.thumbnailContainer}>
                <img
                  className={styles.thumbnailImage}
                  alt={video.snippet.id}
                  src={video.snippet.thumbnails.medium.url}
                />
                <div className={styles.timeStamp}>{duration[index]}</div>
              </div>
              <div className={styles.videoStats}>
                <h3 className={styles.videoTitle}>{video.snippet.title}</h3>
                <div className={styles.channelTitle}>{video.snippet.channelTitle}</div>
                <div className={styles.views}>{views[index]} views</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RelatedVideos;
