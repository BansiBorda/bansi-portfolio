import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import Header from './components/Header';
import Projects from './components/project/Projects';

const App = () => {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Projects />
      </div>
    </PortfolioProvider>
  );
};

export default App;
