import Accordion from "./Accordion.js";
import { Element } from "react-scroll";
import '../styles/accordion.css';

const Experience = () => {
    const items = [
        {
            title: "Incoming Software Developer Co-op at Convergence Concepts",
            context: "September 2021",
            content: "Develop existing projects such as Fintel Connect and MVPs for low-capital startups primarily using the MERN stack. Support a variety of industries through building solutions for product strategy, AI, marketing, and design.",
            technology: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS"],
            web: "https://cctech.io/"
        },
        {
            title: "IT Analyst Intern at iA Financial Group",
            context: "May 2021 - Present",
            content: "Reduced team workload by 20% by streamlining database reports using SQL and Power BI. Resolved client requests by uploading data using Microsoft SQL Server to launch online applications. Coordinated the deployment and testing of global system changes such as email and division name.",
            technology: ["SQL", "Microsoft SQL Server", "Power BI"],
            web: "https://solutionsinsurance.com/"
        },
        {
            title: "Developer at UBC BizTech",
            context: "April 2021 - Present",
            content: "Documented and refactored UBC BizTech web application frontend in React.js by following the MVC framework. Established and communicated new coding standards for the team. Contributed to development of authentication logic allowing user to register and log in to account.",
            technology: ["React.js", "Node.js", "AWS", "DynamoDB", "HTML", "CSS"],
            github: "https://github.com/ubc-biztech"
        },
        {
            title: "Conference Director at UBC BizTech",
            context: "April 2020 - March 2021",
            content: "Planned and hosted two UBC BizTech online conferences, GameWorld and Blueprint, attracting 250 and 475 attendees respectively. Despite online environment, achieved 75% turnout rate by introducing gamificaiton system to incentivize engagement and retention. Maintained strong relationships with over 20 professional partners for each conference.",
            web: "https://www.ubcbiztech.com/"
        }
    ];

    return (
        <Element id="experience" name="experience" className="experience">
            <h2>Experience</h2>
            <Accordion items={items} />
        </Element>
    );
}

export default Experience;