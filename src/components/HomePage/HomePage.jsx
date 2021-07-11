import React from 'react';
import Videos from 'components/Videos/Videos';
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.homePageContainer}>
    <Videos />
  </div>
);

export default HomePage;
