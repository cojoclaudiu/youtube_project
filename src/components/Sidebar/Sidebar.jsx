import React, { useContext } from 'react';
import { SidebarContext } from 'context/SidebarContext';
import styles from './Sidebar.module.css';
import SidebarOpen from './SidebarOpen/SidebarOpen';
import SidebarClosed from './SidebarClosed/SidebarClosed';

const Sidebar = () => {
  const { sidebar } = useContext(SidebarContext);

  return (
    <aside className={styles.sidebarContainer}>
      {sidebar ? <SidebarOpen /> : <SidebarClosed />}
    </aside>
  );
};

export default Sidebar;
