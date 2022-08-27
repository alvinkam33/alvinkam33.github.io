import Accordion from "./Accordion.js";
import { Element } from "react-scroll";
import "../styles/accordion.css";

const Projects = () => {
    const items = [
        {
            title: "UBC BizTech Web Application",
            context: "April 2021 - Present",
            content: "A event HUB for UBC BizTech executives to set up event registration and view event metrics, and for users/partners to register for events and interact with others.",
            technology: ["React.js", "CSS", "Node.js", "AWS", "Firebase", "Serverless"],
            github: "https://github.com/ubc-biztech",
            web: "https://app.ubcbiztech.com/",
        },
        {
            title: "ambience (Hack the North 2021)",
            context: "September 2021",
            content: "A ML/AI facial recognition application that detects a user's emotion through the camera and play a custom playlist based on the emotion, as well as a journal entry feature to log thoughts with the recorded emotion and timestamp.",
            technology: ["React.js", "HTML", "CSS", "Firebase"],
            github: "https://github.com/ichung08/ambience"
        },
        {
            title: "UBC Course Explorer (Oakhacks 2020 1st Place)",
            context: "September 2020 - Present",
            content: "A UBC course search web application built using Python and the Django framework. Webscraped data from the UBC Grades and RateMyProfessors APIs to gather course information such as grade profile, course averages and professor ratings.",
            technology: ["Python", "Django", "JavaScript", "Heroku", "Docker", "HTML", "CSS"],
            github: "https://github.com/patrick-5546/ubc-course-explorer",
            web: "https://devpost.com/software/university-path-explorer"
        },
        {
            title: "Income Calculator",
            context: "August 2021",
            content: "A CRUD API and web application built using the MERN stack where users can calculate the degree that provides them the highest accumulative income based on online data. Implemented a backend database and CRUD API using MongoDB, Node.js and Express.js to store degree information.",
            technology: ["MongoDB", "Express.js", "React.js", "Node.js", "HTML"],
            github: "https://github.com/alvinkam33/income-calculator"
        },
        {
            title: "Train Logistics System (Academic Project)",
            context: "February 2021 - April 2021",
            content: "A train logistics system designed for use by internal logistics managers in order to assign cargo and employees to trains and more. Collaborated in a team of three through all project phases including ideation, relational models, programming, SQL scripting and presentation.",
            technology: ["Java", "SQL", "Oracle", "Swing"]
        },
        {
            title: "Battle To-Do (nwHacks 2021 Honorable Mention)",
            context: "January 2021",
            content: "A spin on the classic to-do list app that serves as a simple 5v5 multiplayer game to increase motivation and productivity.",
            technology: ["Python", "Django", "HTML", "CSS", "SCSS"],
            github: "https://github.com/patrick-5546/battle-todo",
            web: "https://devpost.com/software/battle-to-do"
        },
        {
            title: "Banking Management System (Academic Project)",
            context: "February 2020 - April 2020",
            content: "A banking application built in Java that manages various accounts such as chequing, savings and RESP accounts. Incorporated object-oriented programming concepts such as abstraction, inheritance and polymorphism.",
            technology: ["Java", "JUnit", "Swing"],
            github: "https://github.com/alvinkam33/CPSC210Project"
        },
        {
            title: "ProduBot",
            context: "February 2021 - March 2021",
            content: "A Discord bot programmed using Discord Node.js module to automatically manage UBC BizTech's online competition, the Produthon. Integrated with the Google Cloud and Discord APIs to handle automatic email verification and team formation through users entering a command to the server, reading and writing data to JSON and Google Sheets.",
            technology: ["Node.js"],
        }
    ];

    return (
        <Element id="projects" name="projects" className="projects">
            <h2>Projects</h2>
            <Accordion items={items} />
        </Element>
    );
}

export default Projects;