import React, { useContext } from 'react';
import Header from './components/Header';
import MaintenanceBody from './components/MaintenanceBody';
import Footer from './components/Footer';
import { AppContext } from './context/AppContext';
import './App.css';

function App() {
  const { darkMode } = useContext(AppContext);
  
  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <MaintenanceBody />
      <Footer />
    </div>
  );
}

export default App; 