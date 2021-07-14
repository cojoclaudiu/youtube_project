import React, { useState, useEffect } from 'react';
import { youtubeVideo } from 'api/youtube';
import { viewsFormat, statsFormat } from 'helpers/formatCounts';
import { MdThumbUp, MdThumbDown, MdPlaylistAdd, MdMoreHoriz, MdShare } from 'react-icons/md';

import styles from './VideoStats.module.css';

function VideoStats({ videoId }) {
  const [status, setStatus] = useState({
    active: false,
    like: false,
    dislike: false,
  });

  const [info, setInfo] = useState({
    id: 'Id',
    title: 'Title Loading...',
    likes: 'Likes Loading...',
    dislikes: 'Dislikes Loading...',
    views: 'Views Loading...',
  });

  useEffect(() => {
    async function videoData() {
      const response = await youtubeVideo(videoId).get(``);
      const getData = await response.data;
      // console.log(getData);
      setInfo({
        id: videoId,
        title: getData.items[0].snippet.title,
        likes: getData.items[0].statistics.likeCount,
        dislikes: getData.items[0].statistics.dislikeCount,
        views: getData.items[0].statistics.viewCount,
      });
    }

    videoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  useEffect(() => {
    function upDateTitle() {
      document.title = info.title;
    }
    upDateTitle();
  });

  const handleLike = () => setStatus({ active: !status.active, like: true, dislike: false });

  const handleDislike = () => setStatus({ active: !status.active, like: false, dislike: true });

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

export default VideoStats;
