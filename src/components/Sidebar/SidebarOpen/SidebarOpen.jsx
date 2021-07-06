import styles from './SidebarOpen.module.css';
import React from 'react';
import SidebarBox1 from './SidebarBox1/SidebarBox1';
import SidebarBox2 from './SidebarBox2/SidebarBox2';
import SidebarBox3 from './SidebarBox3/SidebarBox3';
import SidebarBox4 from './SidebarBox4/SidebarBox4';

const SidebarOpen = () => {
  return (
    <div className={styles.sidebarOpen}>
      <SidebarBox1 />
      <SidebarBox2 />
      <SidebarBox3 />
      <SidebarBox4 />
      <div className={styles.sidebarBox5}></div>
      <div className={styles.sidebarBox6}></div>
      <div className={styles.sidebarBox7}></div>
      <footer>Footer</footer>
    </div>
  );
};

export default SidebarOpen;
