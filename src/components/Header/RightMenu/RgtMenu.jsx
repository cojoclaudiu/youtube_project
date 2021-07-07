import React from 'react';

import { IoAppsSharp } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';
import styles from './RgtMenu.module.css';
import SignInButton from '../../Buttons/SignIn/SignInButton';

const RgtMenu = () => (
  <div className={styles.menuRgt}>
    <div className={styles.menuApps}>
      <button type="button" className={styles.iconButton}>
        <IoAppsSharp />
      </button>
    </div>

    <div className={styles.menuSettings}>
      <button type="button" className={styles.iconButton}>
        <BsThreeDotsVertical />
      </button>
    </div>

    <SignInButton />
  </div>
);

export default RgtMenu;
