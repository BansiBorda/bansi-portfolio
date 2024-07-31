import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import Intro from './hero/intro/Intro';

const projects = [
  { title: 'Codequests', description: 'Vue.js, Vite PWA, Firebase' },
  { title: 'Wanderlust Nomad', description: 'Vue.js, Vite' },
  { title: 'Kittens World website', description: 'Vue.js, Tailwind' },
  { title: 'Space Tourism', description: 'Vue.js, Vite' },
];

const MainContent = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <div className="main-content">
      <header className="header">
        <div className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </div>
      </header>
        <Intro/>
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainContent;
