// src/components/Skills.js
import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

const skillsData = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
];

const Skills = () => (
  <section className="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skillsData.map((skill, index) => (
        <div key={index} className="skill-card">
          {skill.icon}
          <p>{skill.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
