import React from 'react';

const Project = ({ title, description, link }) => (
  <div className="border p-4 rounded shadow-lg">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="mb-4">{description}</p>
    <a href={link} className="text-blue-500">View Project</a>
  </div>
);

export default Project;
