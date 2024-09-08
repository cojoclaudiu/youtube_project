import { viewsFormat, statsFormat } from 'helpers/formatCounts';
import { MdThumbUp, MdThumbDown, MdPlaylistAdd, MdMoreHoriz, MdShare } from 'react-icons/md';
import useVideoStats from 'hooks/useVideosStats';
import { youtubeVideo } from 'api/youtube';

import styles from './VideoStats.module.css';

function VideoStats({ videoId }) {
  const { handleLike, handleDislike, info, status } = useVideoStats(videoId, youtubeVideo);

  return (
    <div className={styles.videoStats}>
      <div className={styles.videoStatsRow1}>
        <h1 className={styles.videoTitle}>{info.title}</h1>
      </div>

      <div className={styles.videoStatsRow2}>
        <div className={styles.videoViews}>{viewsFormat(info.views)} views</div>
        <div className={styles.likeContainer}>
          <div
            className={styles.videoLike}
            role="button"
            tabIndex={0}
            onClick={handleLike}
            onKeyDown={handleLike}
          >
            <div className={styles.tooltip}>
              <MdThumbUp className={status.active && status.like && styles.clicked} />
              <span className={styles.tooltiptext}>{status.active ? 'Unlike' : 'I like this'}</span>
            </div>
            {statsFormat(info.likes)}
          </div>

          <div
            className={styles.videoDislike}
            role="button"
            tabIndex={0}
            onClick={handleDislike}
            onKeyDown={handleDislike}
          >
            <div className={styles.tooltip}>
              <MdThumbDown className={status.active && status.dislike && styles.clicked} />
              <span className={styles.tooltiptext}>I dislike this</span>
              {statsFormat(info.dislikes)}
            </div>
          </div>

          <div className={styles.videoShare}>
            <MdShare />
            <div className={styles.tooltip}>
              <h3>Share</h3>
              <span className={styles.tooltiptext}>Share</span>
            </div>
          </div>

          <div className={styles.videoSave}>
            <MdPlaylistAdd />
            <div className={styles.tooltip}>
              <h3>Save</h3>
              <span className={styles.tooltiptext}>Save</span>
            </div>
          </div>

          <div className={styles.videoMore}>
            <MdMoreHoriz />
          </div>
        </div>
      </div>
    </div>
  );
}

export { VideoStats };
