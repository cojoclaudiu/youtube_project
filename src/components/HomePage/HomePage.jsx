import React from 'react';
import Videos from 'components/Video/Videos';
import { LinkProvider } from 'context/LinkContext';
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.homePageContainer}>
    <LinkProvider>
      <Videos />
    </LinkProvider>
  </div>
);

export default HomePage;
