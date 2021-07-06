import styles from './SidebarBox3.module.css';
import React from 'react';
import SignInButton from '../../../Buttons/SignIn/SignInButton';

const sb3Data = [
  {
    id: 'descriptionBox',
    descriptionBox: 'Sign in to like videos, comment, and subscribe.',
    buttonComponent: <SignInButton />
  }
];

const SidebarBox3 = () => {
  return (
    <div className={styles.signInBox}>
      <div className={styles.descriptionSign}>{sb3Data[0].descriptionBox}</div>
      <div className={styles.signInButton}>{sb3Data[0].buttonComponent}</div>
    </div>
  );
};

export default SidebarBox3;
