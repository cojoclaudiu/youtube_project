import { SignInButton } from 'components';
import { IoAppsSharp } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';

import styles from './RightMenu.module.css';

function RightMenu() {
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

      <SignInButton />
    </div>
  );
}

export { RightMenu };
