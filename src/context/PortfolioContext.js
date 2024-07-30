import React, { createContext, useState } from 'react';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState({
    name: 'Bansi',
    about: 'Frontend Developer with experience in React, JavaScript, and CSS.',
    projects: [
      {
        title: 'Project One',
        description: 'Description for project one.',
        link: '#'
      },
      {
        title: 'Project Two',
        description: 'Description for project two.',
        link: '#'
      }
    ]
  });

  return (
    <PortfolioContext.Provider value={{ portfolio, setPortfolio }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
