// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css'; // Ensure this is still pointing to your CSS file
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    // Effect to load theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedTheme);
    }, []);

    // Effect to update localStorage
    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        document.body.className = darkMode ? 'dark' : '';
    }, [darkMode]);

    return (
        <div className={`App ${darkMode ? 'dark' : ''}`}>
            <Header />
            <button onClick={() => setDarkMode(prevMode => !prevMode)}>
                Toggle Dark Mode
            </button>
            <About />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
