import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { relatedVideos } from 'api/youtube';
import styles from './RelatedVideos.module.css';

const RelatedVideos = ({ addId }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    async function getRelatedVideos() {
      const request = await relatedVideos(addId).get(``);
      setRelated(request.data.items);
    }
    // console.log(related[0].id.videoId);
    getRelatedVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addId]);

  return (
    <div className={styles.sidebarRelated}>
      {related.map((video) => (
        <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
          <div className={styles.videoContainer}>
            <div className={styles.videoThumbnail}>
              {video.snippet && (
                <img alt={video.snippet.id} src={video.snippet.thumbnails.medium.url} />
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedVideos;
