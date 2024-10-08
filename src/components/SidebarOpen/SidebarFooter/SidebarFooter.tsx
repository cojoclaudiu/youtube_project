import styles from './SidebarFooter.module.css';

const footerLinks = [
  'About',
  'Press',
  'Copyright',
  'Contact us',
  'Creators',
  'Advertise',
  'Developers',
  'Terms',
  'Privacy',
  'Policy & Safety',
  'How YouTube works',
  'Test new features',
];

function SidebarFooter() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerRow1}>
        {footerLinks.map((link, index) => index <= 6 && <div key={link}>{link}</div>)}
      </div>

      <div className={styles.footerRow2}>
        {footerLinks.map((link, index) => index > 6 && <div key={link}>{link}</div>)}
      </div>

      <div className={styles.footerCopyright}> &copy; 2021 Google LLC</div>
    </div>
  );
}

export { SidebarFooter };
