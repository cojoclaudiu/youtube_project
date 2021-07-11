import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { relatedVideos } from 'api/youtube';
import styles from './RelatedVideos.module.css';

const RelatedVideos = ({ addId }) => {
  const [related, setRelated] = useState([]);

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



  return (
    <div className={styles.sidebarRelated}>
      {related.map((video) => (
        <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
          <div className={styles.videoContainer}>
            <div className={styles.videoThumbnail}>
              <img alt={video.snippet.id} src={video.snippet.thumbnails.medium.url} />
              <h3>{video.snippet.title}</h3>
              <div>Duration: </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedVideos;
