import React from 'react';
import { Link } from 'react-router-dom';
import { statsFormat } from 'helpers/formatCounts';
import durationStamp from 'helpers/durationStamp';
// custom hooks
import useVideos from 'hooks/useVideos';
import useAvatar from 'hooks/useAvatar';
import useSortBy from 'hooks/useSortBy';

// components
import DurationVideo from 'components/DurationVideo/DurationVideo';
import SortBy from 'components/SortBy/SortBy';

import styles from './Videos.module.css';

// videos.items[0].snippet.thumbnails.default.url

function Videos() {
  const videos = useVideos();
  const urlAvatars = useAvatar(videos);
  const { store, keyword, handleFilterASC, handleFilterDESC, handleFilterDefault } = useSortBy();

  return (
    <>
      <SortBy
        handleFilterASC={handleFilterASC}
        handleFilterDESC={handleFilterDESC}
        handleFilterDefault={handleFilterDefault}
      />

      <div className={styles.videosContainer}>
        {store
          .filter(
            (video) =>
              (keyword === null && video) ||
              (keyword !== null && video.snippet.title.toLowerCase().includes(keyword)),
          )
          .map((video, index) => (
            <Link key={video.id} to={`/watch?v=${video.id}`}>
              <div className={styles.videoContainer}>
                <div className={styles.thumbnailContainer}>
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    className={styles.thumbnailImage}
                    alt={video.snippet.title}
                    loading="lazy"
                  />
                  <DurationVideo duration={durationStamp(video.contentDetails.duration)} />
                </div>
                <div className={styles.videoDetails}>
                  <img
                    className={styles.avatarImg}
                    src={urlAvatars[index]}
                    alt={video.snippet.title}
                  />
                  <div className={styles.titlesContainer}>
                    <h3 className={styles.videoTitle}>{video.snippet.title}</h3>
                    <div className={styles.channelTitle}>{video.snippet.channelTitle}</div>
                    <div className={styles.views}>
                      {statsFormat(video.statistics.viewCount)} views
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}

export default Videos;
