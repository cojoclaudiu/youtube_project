import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { youtube, avatar } from 'api/youtube';
import durationStamp from 'helpers/durationStamp';
import { statsFormat } from 'helpers/formatCounts';
import styles from './Videos.module.css';

// videos.items[0].snippet.thumbnails.default.url

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [urlAvatars, setUrlAvatars] = useState([]);

  useEffect(() => {
    async function ytData() {
      const response = await youtube.get();
      setVideos(response.data.items);
    }

    document.title = 'Homepage - Trending';

    ytData();
  }, []);

  useEffect(() => {
    async function channelId() {
      const arr = videos.map(async (video) => {
        const chId = video.snippet.channelId;
        const response = await avatar(chId).get();
        return response.data.items[0].snippet.thumbnails.default.url;
      });
      const resolved = await Promise.all(arr);
      setUrlAvatars(...[resolved]);
    }

    channelId();
  }, [videos]);

  console.log(videos);

  return (
    <div className={styles.videosContainer}>
      {videos.map((video, index) => (
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
};

export default Videos;
