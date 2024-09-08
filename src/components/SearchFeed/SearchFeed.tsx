import { Link } from 'react-router-dom';

import { useSearchFeedResults } from 'hooks/useSearchFeedResults';
import { DurationVideo } from 'components/DurationVideo';
import { useGetVideoDetailsQuery } from 'api/endpoints/video.api';
import { ChannelAvatar } from 'components/ChannelAvatar';
import { skipToken } from '@reduxjs/toolkit/query';
import { ViewsCount } from 'components/ViewsCount';
import { SearchVideoItemSchema } from 'schema/searchFeed.schema';

import styles from './SearchFeed.module.css';

interface VideoProps {
  videoId: string;
}

interface ImageProps {
  item: SearchVideoItemSchema;
}

function Image({ item }: ImageProps) {
  return (
    <img
      className={styles.videoImage}
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
                  <h2 className={styles.title}>{item.snippet.title}</h2>
                  <ViewsCount className={styles.views} videoId={videoId} />

                  <div className={styles.channel}>
                    {item.channel && (
                      <ChannelAvatar className={styles.channelAvatar} channel={item.channel} />
                    )}
                    <div className={styles.channelTitle}>{item.snippet.channelTitle}</div>
                  </div>

                  <p className={styles.description}>{item.snippet.description}</p>
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
