import './styles/app.css';

import React from 'react';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Sidebar from './components/Sidebar/Sidebar';
import { SidebarProvider } from './context/SidebarContext';
import HomePage from './components/HomePage/HomePage';

const App = () => (
  <SidebarProvider>
    <div className="mainWrapper">
      <Header />
      <Categories />
      <Sidebar />
      <HomePage />
    </div>
  </SidebarProvider>
);

export default App;
