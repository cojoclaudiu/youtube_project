import styles from '../../styles/components/Navigation.module.css';
import React, { useContext } from 'react';
import { SidebarContext } from '../../context/SidebarContext';
import { BiMenu } from 'react-icons/bi';

const Navigation = () => {
  const { sidebar, setSidebar } = useContext(SidebarContext);

  return (
    <nav className={styles.navigation}>
      <button className={styles.navigationButton} onClick={() => setSidebar(!sidebar)}>
        <BiMenu />
      </button>
    </nav>
  );
};

export default Navigation;
