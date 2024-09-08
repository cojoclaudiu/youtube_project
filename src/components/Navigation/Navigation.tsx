import { useContext } from 'react';
import { SidebarContext } from 'context/SidebarContext';
import { BiMenu } from 'react-icons/bi';

import styles from './Navigation.module.css';

function Navigation() {
  const { sidebar, setSidebar } = useContext(SidebarContext);

  return (
    <nav className={styles.navigation}>
      <button
        type="button"
        className={styles.navigationButton}
        onClick={() => setSidebar(!sidebar)}
      >
        <BiMenu />
      </button>
    </nav>
  );
}

export { Navigation };
