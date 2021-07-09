import React, { useContext } from 'react';
import { BiMenu } from 'react-icons/bi';
import { SidebarContext } from 'context/SidebarContext';
import styles from './Navigation.module.css';

const Navigation = () => {
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
};

export default Navigation;
