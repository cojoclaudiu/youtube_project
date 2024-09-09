import { Header, Sidebar, VideoPage } from 'components';

import { Fragment } from 'react/jsx-runtime';

function Watch() {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <VideoPage />
    </Fragment>
  );
}

export { Watch };
