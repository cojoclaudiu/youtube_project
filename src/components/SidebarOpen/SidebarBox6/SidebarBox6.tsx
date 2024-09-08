import { IoRadioOutline, IoLogoYoutube } from 'react-icons/io5';
import styles from './SidebarBox6.module.css';

const sb6Data = [
  {
    id: 'premium',
    name: 'Youtube Premium',
    icon: <IoLogoYoutube />,
  },

  {
    id: 'live',
    name: 'Live',
    icon: <IoRadioOutline />,
  },
];

function SidebarBox6() {
  return (
    <div className="sb">
      <h3 className={styles.headingTitle}>More from YouTube</h3>
      {sb6Data.map((link) => (
        <div key={link.id} className="sbContainer">
          <div className="sbIcon">{link.icon}</div>
          <div className="sbTitle">{link.name}</div>
        </div>
      ))}
    </div>
  );
}
export { SidebarBox6 };
