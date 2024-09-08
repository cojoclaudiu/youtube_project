import { Link } from 'react-router-dom';
import _ from 'lodash';

import { useSearchFeedResults } from 'hooks/useSearchFeedResults';
import styles from './SearchFeed.module.css';
import { DurationVideo } from 'components/DurationVideo';
import { useGetVideoDetailsQuery } from 'api/endpoints/video.api';
import { ChannelAvatar } from 'components/ChannelAvatar';
import { skipToken } from '@reduxjs/toolkit/query';
import { ViewsCount } from 'components/ViewsCount';
import { VideoItemSchema } from 'schema/videoItem.schema';

interface VideoProps {
  videoId: string;
}

interface ImageProps {
  item: VideoItemSchema;
}

function Image({ item }: ImageProps) {
  return (
    <img
      className={styles.thumbnailImage}
      src={item.snippet.thumbnails.high.url ?? item.snippet.thumbnails.default.url}
      srcSet={`${item.snippet.thumbnails.medium.url} 550w, ${item.snippet.thumbnails.high.url} 1024w`}
      sizes="(max-width: 550px) 550px, 1024px"
      alt={item.snippet.title}
    />
  );
}

function Duration({ videoId }: VideoProps) {
  const { data } = useGetVideoDetailsQuery(videoId ? { videoId } : skipToken);

  return data && <DurationVideo video={data.items[0]} />;
}

function ChannelSearchImage({ videoId }: VideoProps) {
  const { data } = useGetVideoDetailsQuery(videoId ? { videoId } : skipToken);

  return data && <ChannelAvatar className={styles.channelAvatar} video={data.items[0]} />;
}

function SearchFeed() {
  const { searchFeedResults } = useSearchFeedResults();

  return (
    <div className={styles.feedContainer}>
      <div className={styles.itemsFeed}>
        {searchFeedResults?.map((item) => {
          const videoId = item.id.videoId;

          return (
            <Link key={videoId} to={`/watch?v=${videoId}`}>
              <div className={styles.videoContainer}>
                <div className={styles.thumbnailContainer}>
                  <Image item={item} />
                  <Duration videoId={videoId} />
                </div>
                <div className={styles.videoDetails}>
                  <h2 className={styles.title}>{_.unescape(item.snippet.title)}</h2>
                  <ViewsCount className={styles.views} videoId={videoId} />

                  <div className={styles.channel}>
                    <ChannelSearchImage videoId={videoId} />
                    <div className={styles.channelTitle}>{item.snippet.channelTitle}</div>
                  </div>

                  <p className={styles.description}>{_.unescape(item.snippet.description)}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export { SearchFeed };
