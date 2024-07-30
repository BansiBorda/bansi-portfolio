import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';

const Header = () => {
  const { portfolio } = useContext(PortfolioContext);
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-3xl">{portfolio.name}</h1>
      <p className="text-lg">{portfolio.about}</p>
    </header>
  );
};

export default Header;
