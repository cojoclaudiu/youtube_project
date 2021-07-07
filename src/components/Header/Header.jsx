import React from 'react';
import styles from './Header.module.css';

import RgtMenu from './RightMenu/RgtMenu';
import SearchHeader from './Search/SearchHeader';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';

const Header = () => (
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

export default Header;
