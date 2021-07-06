import styles from '../../styles/components/Header.module.css';

import React from 'react';
import RgtMenu from './RgtMenu';
import SearchHeader from './SearchHeader';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className={styles.headerContainer}>

      <div className={styles.headerMenu}>
        <Navigation />
      </div>
      
      <div className={styles.headerMain}>
        <Logo />
        <SearchHeader />
        <RgtMenu />
      </div>
    </header>
  );
};

export default Header;
