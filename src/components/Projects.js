// src/components/Projects.js
import React from 'react';

const projectsData = [
  { title: 'Project 1', description: 'Description of Project 1', link: '#' },
  { title: 'Project 2', description: 'Description of Project 2', link: '#' },
  { title: 'Project 3', description: 'Description of Project 3', link: '#' },
];

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    {projectsData.map((project, index) => (
      <div key={index} className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link}>View Project</a>
      </div>
    ))}
  </section>
);

export default Projects;
