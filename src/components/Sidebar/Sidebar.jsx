import React, { useContext } from 'react';
import { SidebarContext } from 'context/SidebarContext';
import SidebarOpen from './SidebarOpen/SidebarOpen';
import SidebarClosed from './SidebarClosed/SidebarClosed';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const { sidebar } = useContext(SidebarContext);

  return (
    <aside className={styles.sidebarContainer}>
      {sidebar ? <SidebarOpen /> : <SidebarClosed />}
    </aside>
  );
};

export default Sidebar;
