import React, { useContext } from 'react';
import { SidebarContext } from 'context/SidebarContext';
import useWindowSize from 'Hooks/useWindowSize';
import { SidebarOpen, SidebarClosed } from 'components';

import styles from './Sidebar.module.css';

function Sidebar() {
  let { sidebar } = useContext(SidebarContext);
  const width = useWindowSize();

  if (width > 1400) sidebar = !sidebar;
  if (width < 650) sidebar = false;

  return (
    <aside className={styles.sidebarContainer}>
      {sidebar ? <SidebarOpen /> : <SidebarClosed />}
    </aside>
  );
}

export default Sidebar;
