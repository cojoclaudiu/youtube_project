import styles from './RgtMenu.module.css';
import React from 'react';

import { IoAppsSharp, IoPersonCircleSharp } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';
const RgtMenu = () => {
  return (
    <div className={styles.menuRgt}>
      <div className={styles.menuApps}>
        <button className={styles.iconButton}>
          <IoAppsSharp />
        </button>
      </div>

      <div className={styles.menuSettings}>
        <button className={styles.iconButton}>
          <BsThreeDotsVertical />
        </button>
      </div>

      <div className={styles.outlineButton}>
        <a href="/" className={styles.signInBtn}>
          <div className={styles.signInIcon}>
            <IoPersonCircleSharp />
          </div>
          <span>Sign In</span>
        </a>
      </div>
    </div>
  );
};

export default RgtMenu;
