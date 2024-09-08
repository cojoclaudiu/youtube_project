import { Link } from 'react-router-dom';

import { useRelatedVideos } from 'hooks/useRelatedVideos';
import { DurationVideo } from 'components/DurationVideo';
import { useGetVideosQuery } from 'api/endpoints/videos.api';

import styles from './RelatedVideos.module.css';
import { ViewsCount } from 'components/ViewsCount';

function RelatedVideos() {
  const { relatedVideos } = useRelatedVideos();
  const videoIds = relatedVideos?.map((item) => item.id.videoId).join(',');
  const { data } = useGetVideosQuery({ videoIds });

  return (
    <div className={styles.sidebarRelated}>
      {relatedVideos?.map((video, index) => (
        <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
          <div className={styles.videoContainer}>
            <div className={styles.videoDetails}>
              <div className={styles.thumbnailContainer}>
                <img
                  className={styles.thumbnailImage}
                  alt={video.snippet.title}
                  src={video.snippet.thumbnails.medium.url}
                />
                {data && <DurationVideo video={data?.items[index]} />}
              </div>
              <div className={styles.videoStats}>
                <h3 className={styles.videoTitle}>{video.snippet.title}</h3>
                <div className={styles.channelTitle}>{video.snippet.channelTitle}</div>
                {data && <ViewsCount className={styles.views} video={data?.items[index]} />}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export { RelatedVideos };
