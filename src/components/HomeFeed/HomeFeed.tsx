import { Videos } from 'components';

import styles from './HomeFeed.module.css';

function HomeFeed() {
  document.title = 'Youtube React';

  return (
    <div className={styles.homeFeedContainer}>
      <Videos />
    </div>
  );
}

export { HomeFeed };
