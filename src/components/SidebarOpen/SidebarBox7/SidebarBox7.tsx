import '../index.css';

// Project Icons
import { MdFeedback, MdHelp, MdFlag, MdSettings } from 'react-icons/md';

// sb = sidebar box + number of the box

const sb7Data = [
  {
    id: 'settings1',
    name: 'Settings',
    icon: <MdSettings />,
  },

  {
    id: 'report2',
    name: 'Report history',
    icon: <MdFlag />,
  },

  {
    id: 'help3',
    name: 'Help',
    icon: <MdHelp />,
  },

  {
    id: 'feedback4',
    name: 'Send feedback',
    icon: <MdFeedback />,
  },
];

function SidebarBox7() {
  return (
    <div className="sb">
      {sb7Data.map((link) => (
        <div key={link.id} className="sbContainer">
          <div className="sbIcon">{link.icon}</div>
          <div className="sbTitle">{link.name}</div>
        </div>
      ))}
    </div>
  );
}

export { SidebarBox7 };
