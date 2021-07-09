import React from 'react';
import Videos from 'components/Video/Videos';
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.homePageContainer}>
    <Videos />
  </div>
);

export default HomePage;
