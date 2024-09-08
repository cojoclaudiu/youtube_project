import '../index.css';
// import styles from './SidebarBox2.module.css';

import { MdHistory, MdVideoLibrary } from 'react-icons/md';

const sb2Data = [
  {
    id: 'lib1',
    name: 'Library',
    icon: <MdVideoLibrary />,
  },

  {
    id: 'history2',
    name: 'History',
    icon: <MdHistory />,
  },
];

const SidebarBox2 = () => (
  <div className="sb">
    {sb2Data.map((link) => (
      <div key={link.id} className="sbContainer">
        <div className="sbIcon">{link.icon}</div>
        <div className="sbTitle">{link.name}</div>
      </div>
    ))}
  </div>
);

export default SidebarBox2;
