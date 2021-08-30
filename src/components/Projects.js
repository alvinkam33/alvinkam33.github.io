import Accordion from "./Accordion.js";
import { Element } from "react-scroll";
import "../styles/accordion.css";

const Projects = () => {
    const items = [
        {
            title: "UBC Course Explorer (Oakhacks 2020 1st Place)",
            context: "September 2020 - Present",
            content: "A UBC course search web application built using Python and the Django framework. Webscraped data from the UBC Grades and RateMyProfessors APIs to gather course information such as grade profile, course averages and professor ratings. Contributed to implementation of the frontend, particularly the integration with backend API calls and the info page. Designed a recursive solution using HTML and JavaScript to display a course prerequisite tree.",
            github: "https://github.com/patrick-5546/ubc-course-explorer",
            web: "https://devpost.com/software/university-path-explorer"
        },
        {
            title: "Income Calculator",
            context: "August 2021",
            content: "A CRUD API and web application built using the MERN stack where users can calculate the degree that provides them the highest accumulative income based on online data. Implemented a backend database and CRUD API using MongoDB, Node.js and Express.js to store degree information. Designed a simple UI using React.js following the MVC framework, integrating it to the backend through API calls.",
            github: "https://github.com/alvinkam33/income-calculator"
        },
        {
            title: "Train Logistics System (Academic Project)",
            context: "February 2021 - April 2021",
            content: "A train logistics system designed for use by internal logistics managers in order to assign cargo and employees to trains and more. Collaborated in a team of three through all project phases including ideation, relational models, programming, SQL scripting and presentation. Developed a basic GUI using Swing where users can input values, perform 19 different queries and view any tables in the relational database."
        },
        {
            title: "Battle To-Do (nwHacks 2021 Honorable Mention)",
            context: "January 2021",
            content: "A spin on the classic to-do list app that serves as a simple 5v5 multiplayer game to increase motivation and productivity. Developed player stats, game functionality and mathematical algorithm to determine the winning team. Designed some of the GUI such as the pre-battle and post-battle pages.",
            github: "https://github.com/patrick-5546/battle-todo",
            web: "https://devpost.com/software/battle-to-do"
        },
        {
            title: "Banking Management System (Academic Project)",
            context: "February 2020 - April 2020",
            content: "A banking application built in Java that manages various accounts such as chequing, savings and RESP accounts. Incorporated object-oriented programming concepts such as abstraction, inheritance and polymorphism. Designed a GUI using Swing to interact with account features such as PIN verification, deposits, withdrawls, and some account-specific functionality.",
            github: "https://github.com/alvinkam33/CPSC210Project"
        },
    ];

    return (
        <Element id="projects" name="projects" className="projects">
            <h2>Projects</h2>
            <Accordion items={items} />
        </Element>
    );
}

export default Projects;