import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/ThemeContext';
import './index.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header-container">
      <h1>My Portfolio</h1>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {theme === 'light' ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
    </header>
  );
};

export default Header;
