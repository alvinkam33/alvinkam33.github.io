import React from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';

const App = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Experience/>
            <Projects/>
        </div>
    );
};

export default App;