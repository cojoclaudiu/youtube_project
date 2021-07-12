import React, { useContext } from 'react';
import { SidebarContext } from 'context/SidebarContext';
import useWindowSize from 'hooks/useWindowSize';
import SidebarOpen from './SidebarOpen/SidebarOpen';
import SidebarClosed from './SidebarClosed/SidebarClosed';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  let { sidebar } = useContext(SidebarContext);
  const width = useWindowSize();

  if (width > 1400) sidebar = !sidebar;
  if (width < 650) sidebar = false;

  return (
    <aside className={styles.sidebarContainer}>
      {sidebar ? <SidebarOpen /> : <SidebarClosed />}
    </aside>
  );
};

export default Sidebar;
