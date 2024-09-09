import { ReactNode } from 'react';
import { useSidebarContext } from 'context/SidebarContext';
import { SidebarOpen, SidebarClosed } from 'components';

import styles from './Sidebar.module.css';

interface RenderSidebarProps {
  open: ReactNode;
  close: ReactNode;
}

function RenderSidebar({ open, close }: RenderSidebarProps) {
  const { sidebar } = useSidebarContext();

  return sidebar ? open : close;
}

function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <RenderSidebar open={<SidebarOpen />} close={<SidebarClosed />} />
    </aside>
  );
}

export { Sidebar };
