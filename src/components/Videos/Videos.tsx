import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { statsFormat } from 'helpers/formatCounts';

import { DurationVideo } from 'components/DurationVideo';

import styles from './Videos.module.css';

import { ChannelAvatar } from 'components/ChannelAvatar';
import { useGetVideosQuery } from 'api/endpoints/videos.api';

function Videos() {
  const { data } = useGetVideosQuery();
  const videos = data?.items;

  return (
    <Fragment>
      {/* <SortBy handleSelect={handleSelect} /> */}

      <div className={styles.videosContainer}>
        {videos
          // ?.filter(
          //   (video) =>
          //     (keyword === null && video) ||
          //     (keyword !== null && video.snippet.title.toLowerCase().includes(keyword)),
          // )
          ?.map((video) => (
            <Link key={video.id.videoId} to={`/watch?v=${video.id}`}>
              <div className={styles.videoContainer}>
                <div className={styles.thumbnailContainer}>
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    className={styles.thumbnailImage}
                    alt={video.snippet.title}
                    loading="lazy"
                  />
                  <DurationVideo video={video} />
                </div>
                <div className={styles.videoDetails}>
                  <ChannelAvatar className={styles.avatarImg} video={video} />

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
