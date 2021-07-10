import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { relatedVideos } from 'api/youtube';
import styles from './RelatedVideos.module.css';

const RelatedVideos = ({ addId }) => {
  const [related, setRelated] = useState([]);

  // const [relatedDetails, setRelatedDetails] = useState({
  //   id: "",
  //   title: "",
  //   duration: ""

  // })

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

  // useEffect(() => {
  //   async function videoDetails(id) {
  //     const response = await getVideoDetails(id).get();
  //     const getData = await response.data.items;
  //     setContentDetails(getData.items.contentDetails);
  //   }
  //   videoDetails();
  // }, [addId]);
  // console.log(contentDetails);

  return (
    <div className={styles.sidebarRelated}>
      {related.map((video) => (
        <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
          <div className={styles.videoContainer}>
            <div className={styles.videoThumbnail}>
              <img alt={video.snippet.id} src={video.snippet.thumbnails.medium.url} />
              <h3>{video.snippet.title}</h3>
              <div>time</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedVideos;
