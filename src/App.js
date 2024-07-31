import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './Sidebar';
import HeroSection from './components/hero/HeroSection';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div id="app">
        <Sidebar />
        <HeroSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
