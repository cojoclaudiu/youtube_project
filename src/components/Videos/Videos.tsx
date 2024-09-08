import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import durationStamp from 'helpers/durationStamp';
import { statsFormat } from 'helpers/formatCounts';

import useVideos from 'hooks/useVideos';
import useAvatar from 'hooks/useAvatar';
import { youtube, avatar } from 'api/youtube';

import { DurationVideo } from 'components/DurationVideo';
import { SortBy } from 'components/SortBy';

import styles from './Videos.module.css';

function Videos() {
  const { store, handleSelect, keyword } = useVideos(youtube);
  const { avatarURL } = useAvatar(avatar, store);
  return (
    <Fragment>
      <SortBy handleSelect={handleSelect} />

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
                    src={avatarURL?.[index]}
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
    </Fragment>
  );
}

export { Videos };
