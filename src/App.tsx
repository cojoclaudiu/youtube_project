import { Routes } from 'Router';
import './styles/app.css';
import { SidebarProvider } from 'context/SidebarContext';

function App() {
  return (
    <div className="mainWrapper">
      <SidebarProvider>
        <Routes />
      </SidebarProvider>
    </div>
  );
}

export default App;
