import React from 'react';
import './index.css';

const Projects = () => {
  const projects = [
    { title: 'Codequests', description: 'Vue.js, Vite PWA, Firebase' },
    { title: 'Wanderlust Nomad', description: 'Vue.js, Vite' },
    { title: 'Kittens World website', description: 'Vue.js, Tailwind' },
    { title: 'Space Tourism', description: 'Vue.js, Vite' },
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
