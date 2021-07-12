import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import RgtMenu from 'components/RightMenu/RgtMenu';
import SearchHeader from 'components/Search/SearchHeader';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
  const width = useWindowSize() > 730;
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerMenu}>
        <Navigation />
      </div>

      <div className={styles.headerMain}>
        <Logo />
        <SearchHeader />
        {width && <RgtMenu />}
      </div>
    </header>
  );
};

export default Header;
