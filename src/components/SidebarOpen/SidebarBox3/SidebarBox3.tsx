import { SignInButton } from 'components/Buttons/SignIn';
import styles from './SidebarBox3.module.css';

const sb3Data = [
  {
    id: 'descriptionBox',
    descriptionBox: 'Sign in to like videos, comment, and subscribe.',
    buttonComponent: <SignInButton />,
  },
];

function SidebarBox3() {
  return (
    <div className={styles.signInBox}>
      <div className={styles.descriptionSign}>{sb3Data[0].descriptionBox}</div>
      <div className={styles.signInButton}>{sb3Data[0].buttonComponent}</div>
    </div>
  );
}

export { SidebarBox3 };
