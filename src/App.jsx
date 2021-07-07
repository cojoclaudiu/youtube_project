import './styles/app.css';

import React from 'react';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Sidebar from './components/Sidebar/Sidebar';
import { SidebarProvider } from './context/SidebarContext';

const App = () => (
  <SidebarProvider>
    <div className="mainWrapper">
      <Header />
      <Categories />
      <Sidebar />
    </div>
  </SidebarProvider>
);

export default App;
