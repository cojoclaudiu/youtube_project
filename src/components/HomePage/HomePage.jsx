import React from 'react';
import { Videos } from 'components';

import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homePageContainer}>
      <Videos />
    </div>
  );
}

export default HomePage;
