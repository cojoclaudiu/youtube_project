import styles from '../../styles/components/Navigation.module.css';
import React from 'react';
import { BiMenu } from 'react-icons/bi';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <button className={styles.navigationButton}>
        <BiMenu />
      </button>
    </nav>
  );
};

export default Navigation;
