import Accordion from "./Accordion.js";
import { Element } from "react-scroll";
import '../styles/accordion.css';

const Experience = () => {
    const items = [
        {
            title: "Lead Developer at UBC BizTech Network",
            context: "April 2022 - Present",
            content: "Promoted to lead developer position over UBC BizTech's development team. Optimized team efficiency by over 400% through improving work processes, strengthening team culture and enhancing communication with stakeholders to complete application features on time. Oversaw and supported responsibilities of other developers while building multiple features such as the development environment, payment integration, admin functionality and event registration.",
            technology: ["React.js", "Node.js", "AWS", "DynamoDB", "HTML", "CSS"],
            github: "https://github.com/ubc-biztech"
        },
        {
            title: "Software Developer Co-op at Convergence Concepts Inc",
            context: "September 2021 - September 2022",
            content: "Exceeded intern expectations, independently pushing over 1500 commits in a timely manner for numerous client projects primarily using the MERN technology stack while maintaining consistent communication with relevant project stakeholders. Boosted SEO of company's website, increasing traffic by 900% through developing a blog sitemap and meta tags with AWS S3, CloudFront and Lambda. Coordinated the implementation of a knowledge base for the company's largest client project.",
            technology: ["MongoDB", "Express.js", "React.js", "Node.js", "AWS", "GraphQL", "PHP", "Strapi", "Contentful", "Next.js", "Drupal"],
            web: "https://cctech.io/"
        },
        {
            title: "IT Analyst Intern at iA Financial Group",
            context: "May 2021 - September 2021",
            content: "Part of the Special Markets team. Uploaded, migrated and peer-reviewed online insurance applications 50% ahead of schedule using Microsoft SQL Server. Planned the deployment and testing of several global application changes. Reduced team workload by 20% by streamlining database reports using SQL and Power BI. Optimized the tracking of team performance metrics by 90% through independently building and documenting a comprehensive, automated Power BI report for sprint retrospectives.",
            technology: ["SQL", "Microsoft SQL Server", "Power BI"],
            web: "https://solutionsinsurance.com/"
        },
        {
            title: "Developer at UBC BizTech Network",
            context: "April 2021 - March 2022",
            content: "Working on UBC BizTech's event management webapp. Documented and refactored UBC BizTech’s web application frontend in React.js by following the MVC framework while establishing and communicating new coding standards for the team. Organized the development of authentication and user membership logic through facilitating discussions with team members about the flow of the application and data structure in AWS.",
            technology: ["React.js", "Node.js", "AWS", "DynamoDB", "HTML", "CSS"],
            github: "https://github.com/ubc-biztech"
        },
        {
            title: "Conference Director at UBC BizTech Network",
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