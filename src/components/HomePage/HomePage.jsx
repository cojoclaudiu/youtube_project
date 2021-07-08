import React from 'react';
import styles from './HomePage.module.css';
import Videos from './Videos/Videos';

const HomePage = () => (
  <div className={styles.homePageContainer}>
    <Videos />
  </div>
);

export default HomePage;
