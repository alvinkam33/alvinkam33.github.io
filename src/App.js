import React from 'react';
import Header from './components/Header.js';
import Intro from './components/Intro.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';

const App = () => {
    return (
        <div>
            <Header />
            <div className="sections">
                <Intro />
                <About />
                <Experience />
                <Projects />
            </div>
        </div>
    );
};

export default App;