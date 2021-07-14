import React from 'react';
import useWindowSize from 'Hooks/useWindowSize';
import { RightMenu, SearchInputHeader, Navigation, Logo } from 'components';

import styles from './Header.module.css';

function Header() {
  const width = useWindowSize() > 730;
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerMenu}>
        <Navigation />
      </div>

      <div className={styles.headerMain}>
        <Logo />
        <SearchInputHeader />
        {width && <RightMenu />}
      </div>
    </header>
  );
}

export default Header;
