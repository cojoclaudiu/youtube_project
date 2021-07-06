import './styles/app.css';

import React from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Categories from './components/Categories/Categories';

const App = () => {
  return (
    <div className="mainWrapper">
      <Header />
      <Categories />
      <Navigation />
    </div>
  );
};

export default App;
