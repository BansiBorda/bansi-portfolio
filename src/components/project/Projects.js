import React, { useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';
import Project from './Project';

const Projects = () => {
  const { portfolio } = useContext(PortfolioContext);
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolio.projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
