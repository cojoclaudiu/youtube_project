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

  const durationStamp = (duration) => {
    const durationArray = duration.match(/\d+/g).map(Number);
    // let newHours = null;
    let timeStamp = null;

    if (durationArray.length === 1) {
      const [sec] = durationArray;
      if (sec <= 9) {
        timeStamp = `0:0${sec}`;
      } else {
        timeStamp = `0:${sec}`;
      }
    }

    if (durationArray.length === 2) {
      const [min, sec] = durationArray;
      if (sec <= 9) {
        timeStamp = `${min}:0${sec}`;
      } else {
        timeStamp = `${min}:${sec}`;
      }
    }

    if (durationArray.length === 3) {
      const [hour, min, sec] = durationArray;
      if (min <= 9 && sec <= 9) {
        timeStamp = `${hour}:0${min}:0${sec}`;
      } else if (min <= 9 && sec >= 9) {
        timeStamp = `${hour}:0${min}:${sec}`;
      } else if (min >= 9 && sec <= 9) {
        timeStamp = `${hour}:${min}:0${sec}`;
      } else {
        timeStamp = `${hour}:${min}:${sec}`;
      }
    }

    return `${timeStamp}`;
  };

  return (
    <div className={styles.videosContainer}>
      {videos.map((video) => (
        <div key={video.id} className={styles.videoContainer}>
          <figure>
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div>{durationStamp(video.contentDetails.duration)}</div>
          </figure>
          <div className={styles.videoDetails}>
            <h3 className={styles.videoTitle}>{video.snippet.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
