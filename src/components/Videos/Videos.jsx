import React from 'react';
import { Link } from 'react-router-dom';
import durationStamp from 'helpers/durationStamp';
import { statsFormat } from 'helpers/formatCounts';

// custom hooks
import useVideos from 'hooks/useVideos';
import useAvatar from 'hooks/useAvatar';

// API
import { youtube, avatar } from 'api/youtube';

// components
import DurationVideo from 'components/DurationVideo/DurationVideo';

// styles
import styles from './Videos.module.css';

function Videos() {
  const { videos, loading } = useVideos(youtube);
  const { avatarURL } = useAvatar(avatar, videos);

  return (
    <>
      <div className={styles.videosContainer}>
        {loading && <div>loading...</div>}
        {videos &&
          videos.length > 0 &&
          videos.map((video, index) => (
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
                    src={avatarURL && avatarURL.length > 0 && avatarURL[index]}
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
