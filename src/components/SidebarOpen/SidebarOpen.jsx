import React from 'react';
import styles from './SidebarOpen.module.css';
import SidebarBox1 from './SidebarBox1/SidebarBox1';
import SidebarBox2 from './SidebarBox2/SidebarBox2';
import SidebarBox3 from './SidebarBox3/SidebarBox3';
import SidebarBox4 from './SidebarBox4/SidebarBox4';
import SidebarBox5 from './SidebarBox5/SidebarBox5';
import SidebarBox6 from './SidebarBox6/SidebarBox6';
import SidebarBox7 from './SidebarBox7/SidebarBox7';
import SidebarFooter from './SidebarFooter/SidebarFooter';

function SidebarOpen() {
  return (
    <div className={styles.sidebarOpen}>
      <SidebarBox1 />
      <SidebarBox2 />
      <SidebarBox3 />
      <SidebarBox4 />
      <SidebarBox5 />
      <SidebarBox6 />
      <SidebarBox7 />
      <SidebarFooter />
    </div>
  );
}

export default SidebarOpen;
