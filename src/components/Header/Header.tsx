import { RightMenu, SearchInputHeader, Navigation, Logo } from 'components';
import styles from './Header.module.css';

function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerMenu}>
        <Navigation />
      </div>
      <div className={styles.headerMain}>
        <Logo />
        <SearchInputHeader />
        <RightMenu />
      </div>
    </header>
  );
}

export { Header };
