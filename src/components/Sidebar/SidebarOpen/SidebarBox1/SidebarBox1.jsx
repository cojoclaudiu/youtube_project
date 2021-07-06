// import styles from './SidebarBox1.module.css';
import '../index.css';
import React from 'react';

// Project Icons
import { MdExplore, MdSubscriptions, MdHome } from 'react-icons/md';

//sb = sidebar box + number of the box

const sb1Data = [
  {
    id: 'home1',
    name: 'Home',
    icon: <MdHome />
  },

  {
    id: 'explore2',
    name: 'Explore',
    icon: <MdExplore />
  },

  {
    id: 'subs3',
    name: 'Subscriptions',
    icon: <MdSubscriptions />
  }
];

const SidebarBox1 = () => {
  return (
    <div className={`sb`}>
      {sb1Data.map(link => {
        return (
          <div key={link.id} className={`sbContainer`}>
            <div className={`sbIcon`}>{link.icon}</div>
            <div className={`sbTitle`}>{link.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SidebarBox1;
