import './styles/app.css';

import React from 'react';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => (
  <div className="mainWrapper">
    <Header />
    <Categories />
    <Sidebar />
  </div>
);

export default App;
