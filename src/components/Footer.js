// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => (
  <footer>
    <p>Connect with me:</p>
    <div className="social-icons">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    </div>
  </footer>
);

export default Footer;
