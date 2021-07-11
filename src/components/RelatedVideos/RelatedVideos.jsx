import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { relatedVideos, youtubeVideo } from 'api/youtube';
import durationStamp from 'helpers/durationStamp';
import styles from './RelatedVideos.module.css';

const RelatedVideos = ({ addId }) => {
  const [related, setRelated] = useState([]);
  const [videoDuration, setVideoDuration] = useState([]);

  useEffect(() => {
    async function getRelatedVideos() {
      const response = await relatedVideos(addId).get();
      const getData = await response.data.items.filter((obj) =>
        Object.prototype.hasOwnProperty.call(obj, 'snippet'),
      );
      setRelated(getData);
    }
    getRelatedVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addId]);

  useEffect(() => {
    async function getVideoData() {
      const arr = related.map(async (video) => {
        const vId = video.id.videoId;
        const response = await youtubeVideo(vId).get();
        return durationStamp(response.data.items[0].contentDetails.duration);
      });
      const resolved = await Promise.all(arr);
      setVideoDuration(...[resolved]);
    }
    getVideoData();
  }, [related]);

  // console.log(videoDuration);

  return (
    <div className={styles.sidebarRelated}>
      {related.map((video, index) => (
        <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
          <div className={styles.videoContainer}>
            <div className={styles.videoThumbnail}>
              <div className={styles.thumbnailContainer}>
                <img
                  className={styles.thumbnailImage}
                  alt={video.snippet.id}
                  src={video.snippet.thumbnails.medium.url}
                />
                <div className={styles.timeStamp}>{videoDuration[index]}</div>
              </div>
              <h3>{video.snippet.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedVideos;
