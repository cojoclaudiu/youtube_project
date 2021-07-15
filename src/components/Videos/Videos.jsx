import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { statsFormat } from 'helpers/formatCounts';
import durationStamp from 'helpers/durationStamp';
import useVideos from 'hooks/useVideos';
import useAvatar from 'hooks/useAvatar';

import styles from './Videos.module.css';

// videos.items[0].snippet.thumbnails.default.url

function Videos() {
  const videos = useVideos();
  const urlAvatars = useAvatar(videos);

  const [store, setStore] = useState([]);
  useEffect(() => setStore(videos), [videos]);

  console.log(store);

  return (
    <div className={styles.videosContainer}>
      {store.map((video, index) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <div className={styles.videoContainer}>
            <div className={styles.thumbnailContainer}>
              <img
                className={styles.thumbnailImage}
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
              />
              <div className={styles.timeStamp}>{durationStamp(video.contentDetails.duration)}</div>
            </div>
            <div className={styles.videoDetails}>
              <img className={styles.avatarImg} src={urlAvatars[index]} alt={video.snippet.title} />

              <div className={styles.titlesContainer}>
                <h3 className={styles.videoTitle}>{video.snippet.title}</h3>
                <div className={styles.channelTitle}>{video.snippet.channelTitle}</div>
                <div className={styles.views}>{statsFormat(video.statistics.viewCount)} views</div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Videos;
