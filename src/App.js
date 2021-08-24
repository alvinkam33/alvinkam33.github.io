import React from 'react';
import Accordion from './components/Accordion.js';

const items = [
    {
        title: "project1",
        content: "project1"
    },
    {
        title: "project2",
        content: "project2"
    },
    {
        title: "project3",
        content: "project3"
    },
    {
        title: "project4",
        content: "project4"
    },
    {
        title: "project5",
        content: "project5"
    }
]
const App = () => {
    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
};

export default App;