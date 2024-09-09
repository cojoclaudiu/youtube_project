import { Header, Sidebar, Categories, HomeFeed } from 'components';
import { Fragment } from 'react/jsx-runtime';

function Homepage() {
  return (
    <Fragment>
      <Header />
      <HomeFeed />
      <Sidebar />
      <Categories />
    </Fragment>
  );
}

export default Homepage;
