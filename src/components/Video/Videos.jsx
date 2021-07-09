import React, { useState, useEffect } from 'react';
import youtube from 'api/youtube';
import durationStamp from 'helpers/durationStamp';
import styles from './Videos.module.css';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [, setLink] = useState('/');

  useEffect(() => {
    async function ytData() {
      const request = await youtube.get(``);
      setVideos(request.data.items);
    }

    ytData();
  }, []);


  
  const handleId = (video) => setLink(video.id);

  return (
    <div className={styles.videosContainer}>
      {videos.map((video) => (
        <div
          className={styles.videoContainer}
          tabIndex={0}
          role="button"
          key={video.id}
          onClick={() => handleId(video)}
          onKeyDown={handleId}
        >
          <div className={styles.thumbnailContainer}>
            <img
              className={styles.thumbnailImage}
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
            />
            <div className={styles.timeStamp}>{durationStamp(video.contentDetails.duration)}</div>
          </div>
          <div className={styles.videoDetails}>
            <h3 className={styles.videoTitle}>{video.snippet.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
