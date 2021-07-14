import React from 'react';
import { Videos } from 'components';

import styles from './HomeFeed.module.css';

function HomeFeed() {
  return (
    <div className={styles.homePageContainer}>
      <Videos />
    </div>
  );
}

export default HomeFeed;
