import React from 'react';
import RgtMenu from 'components/RightMenu/RgtMenu';
import SearchHeader from 'components/Search/SearchHeader';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';
import styles from './Header.module.css';

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
