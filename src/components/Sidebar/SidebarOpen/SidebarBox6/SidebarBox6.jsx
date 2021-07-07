import styles from './SidebarBox6.module.css'
import React from 'react'

import { IoRadioOutline,IoLogoYoutube } from 'react-icons/io5';


const sb6Data = [
  {
    id: 'premium',
    name: 'Youtube Premium',
    icon: <IoLogoYoutube />
  },

  {
    id: 'live',
    name: 'Live',
    icon: <IoRadioOutline />
  }
];

const SidebarBox6 = () => {
  return (
    <div className={`sb`}>
      <h3 className={styles.headingTitle}>
More from YouTube
</h3>
      {sb6Data.map(link => {
        return (
          <div key={link.id} className={`sbContainer`}>
            <div className={`sbIcon`}>{link.icon}</div>
            <div className={`sbTitle`}>{link.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default SidebarBox6
