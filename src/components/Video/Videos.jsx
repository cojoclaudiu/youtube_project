import React, { useState, useEffect, useContext } from 'react';
import { LinkContext } from 'context/LinkContext';
import { Link } from 'react-router-dom';
import youtube from 'api/youtube';
import durationStamp from 'helpers/durationStamp';
import styles from './Videos.module.css';

const Videos = () => {
  const { setLink } = useContext(LinkContext);
  const [videos, setVideos] = useState([]);

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
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <div
            className={styles.videoContainer}
            tabIndex={0}
            role="button"
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
        </Link>
      ))}
    </div>
  );
};

export default Videos;
