import styles from './SignInButton.module.css';
import React from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5';

const SignInButton = () => {
  return (
    <div className={styles.outlineButton}>
      <a href="/" className={styles.signInBtn}>
        <div className={styles.signInIcon}>
          <IoPersonCircleSharp />
        </div>
        <span>Sign In</span>
      </a>
    </div>
  );
};

export default SignInButton;
