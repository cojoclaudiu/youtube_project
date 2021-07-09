import React, { useContext } from 'react';
import { LinkContext, LinkProvider } from 'context/LinkContext';
// useLocation;
// import styles from './VideoPage.module.css';

const VideoPage = () => {
  const { link } = useContext(LinkContext);
  return (
    <LinkProvider>
      <div>This is the video link id: HERE I need the {link} value </div>
    </LinkProvider>
  );
};

export default VideoPage;
