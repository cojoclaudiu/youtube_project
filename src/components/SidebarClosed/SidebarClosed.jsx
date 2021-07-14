import React from 'react';
import { MdHome, MdExplore, MdSubscriptions, MdHistory, MdVideoLibrary } from 'react-icons/md';
import styles from './SidebarClosed.module.css';

const sbClosedData = [
  {
    id: 'home1',
    name: 'Home',
    icon: <MdHome />,
  },

  {
    id: 'explore2',
    name: 'Explore',
    icon: <MdExplore />,
  },

  {
    id: 'subs3',
    name: 'Subscriptions',
    icon: <MdSubscriptions />,
  },

  {
    id: 'lib4',
    name: 'Library',
    icon: <MdVideoLibrary />,
  },

  {
    id: 'history5',
    name: 'History',
    icon: <MdHistory />,
  },
];

function SidebarClosed() {
  return (
    <div className={styles.sidebarClosed}>
      {sbClosedData.map((link) => (
        <div key={link.id} className={styles.itemContainer}>
          <div className={styles.itemIcon}>{link.icon}</div>
          <div className={styles.itemName}>{link.name}</div>
        </div>
      ))}
    </div>
  );
}

export default SidebarClosed;
