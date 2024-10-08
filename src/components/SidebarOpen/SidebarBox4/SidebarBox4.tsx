import { IoMusicalNotesSharp, IoTrophy, IoRadioOutline } from 'react-icons/io5';
import { RiGamepadFill, RiArticleFill } from 'react-icons/ri';
import { GiVrHeadset } from 'react-icons/gi';
import styles from './SidebarBox4.module.css';

const sb4Data = [
  {
    id: 'music1',
    name: 'Music',
    icon: <IoMusicalNotesSharp />,
  },

  {
    id: 'sports2',
    name: 'Sports',
    icon: <IoTrophy />,
  },

  {
    id: 'gaming3',
    name: 'Gaming',
    icon: <RiGamepadFill />,
  },

  {
    id: 'news4',
    name: 'News',
    icon: <RiArticleFill />,
  },

  {
    id: 'live5',
    name: 'Live',
    icon: <IoRadioOutline />,
  },

  {
    id: '360video',
    name: '360° Video',
    icon: <GiVrHeadset />,
  },
];

function SidebarBox4() {
  return (
    <div className="sb">
      <h3 className={styles.headingTitle}>Best of Youtube</h3>
      {sb4Data.map((link) => (
        <div key={link.id} className="sbContainer">
          <div className={`${styles.iconDark} sbIcon`}>{link.icon}</div>
          <div className="sbTitle">{link.name}</div>
        </div>
      ))}
    </div>
  );
}

export { SidebarBox4 };
