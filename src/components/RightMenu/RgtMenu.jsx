import React from 'react';
import useWindowSize from 'hooks/useWindowSize';
import { IoAppsSharp } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';
import SignInButton from 'components/Buttons/SignIn/SignInButton';
import styles from './RgtMenu.module.css';

const RgtMenu = () => {
  const width = useWindowSize() < 935;

  return (
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

      {!width && <SignInButton />}
    </div>
  );
};

export default RgtMenu;
