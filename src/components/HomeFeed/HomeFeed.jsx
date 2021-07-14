import React from 'react';
import { Videos } from 'components';

import styles from './HomeFeed.module.css';

function HomeFeed() {
  return (
    <div className={styles.homeFeedContainer}>
      <Videos />
    </div>
  );
}

export default HomeFeed;
