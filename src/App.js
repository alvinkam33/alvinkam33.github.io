import React, { createContext, useState } from 'react';
import Header from './components/Header.js';
import Intro from './components/Intro.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';

export const ThemeContext = createContext(null);

const App = () => {
    const [theme, setTheme] = useState("dark")

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div id={theme}>
                <Header theme={theme} setTheme={setTheme}/>
                <div className="sections">
                    <Intro />
                    <About />
                    <Experience />
                    <Projects />
                </div> 
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
};

export default App;