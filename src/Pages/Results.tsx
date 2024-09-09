import { Header, Sidebar, SearchFeed } from 'components';
import { Fragment } from 'react';

function Results() {
  return (
    <Fragment>
      <Header />
      <Sidebar />
      <SearchFeed />
    </Fragment>
  );
}

export default Results;
