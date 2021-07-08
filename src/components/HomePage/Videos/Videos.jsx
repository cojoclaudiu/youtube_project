import React, { useState, useEffect } from 'react';
import styles from './Videos.module.css';
import youtube from '../../../api/youtube';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function ytData() {
      const request = await youtube.get(``);
      setVideos(request.data.items);
    }

    ytData();
  }, []);

  return (
    <div className={styles.videosContainer}>
      {videos.map((video) => (
        <div key={video.id} className={styles.videoContainer}>
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          <div className={styles.videoDetails}>
            <h3>{video.snippet.title}</h3>
          </div>

          {/* {console.log(video)} */}
        </div>
      ))}
    </div>
  );
};

export default Videos;
