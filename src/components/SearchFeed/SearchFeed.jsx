import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { youtubeVideo, avatar, searchVideo } from 'api/youtube';

// custom hooks
import useWindowSize from 'hooks/useWindowSize';
import useSearchResults from 'hooks/useSearchResults';
import useDuration from 'hooks/useDuration';
import useAvatar from 'hooks/useAvatar';
import useViews from 'hooks/useViews';

// components
import DurationVideo from 'components/DurationVideo/DurationVideo';

import styles from './SearchFeed.module.css';

function SearchFeed() {
  const width = useWindowSize() > 550;
  const { searchResults } = useSearchResults(searchVideo);
  const { duration } = useDuration(searchResults, youtubeVideo);
  const { avatarURL } = useAvatar(avatar, searchResults);
  const { views } = useViews(searchResults, youtubeVideo);

  return (
    <div className={styles.feedContainer}>
      <div className={styles.itemsFeed}>
        {searchResults?.map((item, i) => (
          <Link
            key={item.snippet.title + Math.random().toFixed(5)}
            to={`/watch?v=${item?.id?.videoId}`}
          >
            <div className={styles.videoContainer}>
              <div className={styles.thumbnailContainer}>
                <img
                  className={styles.thumbnailImage}
                  src={
                    width ? item.snippet.thumbnails.medium.url : item.snippet.thumbnails.high.url
                  }
                  alt={item.snippet.title}
                />
                <DurationVideo duration={duration?.[i]} />
              </div>
              <div className={styles.videoDetails}>
                <h2 className={styles.title}>{_.unescape(item.snippet.title)}</h2>
                <p className={styles.views}>{views?.[i]} views</p>
                <div className={styles.channel}>
                  <img
                    className={styles.channelAvatar}
                    src={avatarURL?.[i]}
                    alt={item.snippet.title}
                  />
                  <div className={styles.channelTitle}>{item.snippet.channelTitle}</div>
                </div>

                <p className={styles.description}>{_.unescape(item.snippet.description)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchFeed;
