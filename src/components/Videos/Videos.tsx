import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { statsFormat } from 'helpers/formatCounts';

import { DurationVideo } from 'components/DurationVideo';

import { ChannelAvatar } from 'components/ChannelAvatar';

import { useHomePageVideos } from 'hooks/useHomePageVideos';

import styles from './Videos.module.css';
import { VideoItemSchema } from 'schema/videoItem.schema';
import { ChannelItemSchema } from 'schema/channel.schema';

interface VideoItemProps {
  video: VideoItemSchema & { channel?: ChannelItemSchema | undefined };
}

function VideoItem({ video }: VideoItemProps) {
  return (
    <Link to={`/watch?v=${video.id}`}>
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
          {video.channel && <ChannelAvatar className={styles.avatarImg} channel={video.channel} />}

          <div className={styles.titlesContainer}>
            <h3 className={styles.videoTitle}>{video.snippet.title}</h3>
            <div className={styles.channelTitle}>{video.snippet.channelTitle}</div>
            <div className={styles.views}>{statsFormat(+video.statistics.viewCount)} views</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Videos() {
  const { videos } = useHomePageVideos();

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
            <VideoItem key={video.id} video={video} />
          ))}
      </div>
    </Fragment>
  );
}

export { Videos };
