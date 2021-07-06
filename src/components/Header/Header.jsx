import styles from '../../styles/components/Header.module.css';

import React from 'react';
import RgtMenu from './RgtMenu';
import SearchHeader from './SearchHeader';
import Logo from './Logo';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <SearchHeader />
      <RgtMenu />
    </header>
  );
};

export default Header;
