import Accordion from "./Accordion.js";
import { Element } from "react-scroll";
import '../styles/accordion.css';

const Experience = () => {
    const items = [
        {
            title: "Software Engineer Intern at Tesla - Insurance",
            context: "June 2024 - August 2024",
            content: `Designed an insurance policy tester in C# and .NET, reducing rate adjustment times from 1 month to 1 week.
            Expedited project development time by 50% through refactoring the system workflow for code reusability.
            Developed asynchronous processing for 50,000+ tests using the observer pattern, RabbitMQ and multithreading.
            Enhanced system scalability to handle 10,000,000+ data points through Redis key-value caching alongside MySQL data indexing and denormalization, improving query performance.`,
            technology: ["C#", ".NET", "MySQL", "Jenkins", "Redis", "RabbitMQ"],
            web: "https://www.tesla.com/about"
        },
        {
            title: "Developer at UBC nwPlus",
            context: "April 2023 - March 2024",
            content: `Maintained and developed in-house applications for the largest hackathons in Western Canada.
            Built a SQL-like, user-friendly query system from scratch to quickly parse and filter for 
            important applicant information. Debugged numerous internal and external-facing features 
            such as the user portal, application grading, announcements and QR scanning.`,
            technology: ["Next.js", "Node.js", "Firebase", "HTML", "CSS"],
            web: "https://nwplus.io/"
        },
        {
            title: "Software Engineer Intern at Tesla - Internal Diagnostics",
            context: "September 2023 - December 2023",
            content: `Revamped firmware release tracking pages in React and Ruby on Rails while visualizing additional metrics.
            Eliminated scheduled rollout package progress updates every 2 hours by implementing a customizable query app
            Strengthened the test suite in Mocha and RSpec to achieve 100% code coverage, ensuring bug-free deployments.`,
            technology: ["Ruby on Rails", "React", "RSpec", "Mocha"],
            web: "https://www.tesla.com/about"
        },
        {
            title: "Associate Software Developer Intern at Konrad Group",
            context: "May 2023 - August 2023",
            content: `Implemented a user action tracking chrome extension to automate procedure recording and documentation in TypeScript, HTML/CSS and an Express.js API with PostgreSQL and Prisma ORM. 
            Optimized storage capacity from ∼12 to 100+ actions by leveraging image compression and function debouncing.
            Deployed a flawless CI/CD pipeline for all intern projects using Docker, GitHub Actions and AWS EC2.`,
            technology: ["TypeScript", "HTML", "SCSS", "Express.js", "PostgreSQL", "Prisma", "Docker", "GitHub Actions", "AWS", "React"],
            web: "https://www.konrad.com/about"
        },
        {
            title: "Lead Developer at UBC BizTech Network",
            context: "April 2022 - March 2023",
            content: `Promoted to lead developer position over UBC BizTech's development team, leading 8 developers. 
            Optimized team efficiency through improving work processes, strengthening 
            team culture and enhancing communication with stakeholders.
            Streamlined payment systems for 1,000+ active users by integrating AWS and Stripe API.
            Launched an in-house gamification system through building a QR generator and personalized event companion, enhancing attendee engagement with 7,500+ QRs scanned and a 99% satisfaction rate.`,
            technology: ["React", "Node.js", "AWS", "DynamoDB", "HTML", "CSS", "Mocha", "Firebase", "Serverless"],
            web: "https://app.ubcbiztech.com/"
        },
        {
            title: "Software Developer Intern at Convergence",
            context: "September 2021 - September 2022",
            content: `Architected a client’s knowledge base from scratch in TypeScript, React, Node.js, Strapi and MongoDB.
            Boosted company website’s SEO, increasing website traffic from ∼20 to 200+ daily users by implementing an automated sitemap and meta tags service using AWS S3, CloudFront and Lambda.
            Reduced a client’s app latency from ∼4s to <800ms by developing server-side pagination and refactoring webhooks.`,
            technology: ["MongoDB", "Express.js", "React", "Node.js", "AWS", "GraphQL", "PHP", "Strapi", "Contentful", "Next.js", "Drupal"],
            web: "https://cctech.io/"
        },
        {
            title: "IT Analyst Intern at iA Financial Group",
            context: "May 2021 - September 2021",
            content: `Part of the Special Markets team. Uploaded, migrated and peer-reviewed online 
            insurance applications 50% ahead of schedule using Microsoft SQL Server. Planned the 
            deployment and testing of several global application changes. Reduced team workload 
            by 20% by streamlining database reports using SQL and Power BI. Optimized the tracking 
            of team performance metrics by 90% through independently building and documenting a 
            comprehensive, automated Power BI report for sprint retrospectives.`,
            technology: ["SQL", "Microsoft SQL Server", "Power BI"],
            web: "https://solutionsinsurance.com/"
        },
        {
            title: "Developer at UBC BizTech Network",
            context: "April 2021 - March 2022",
            content: `Working on UBC BizTech's event management web application. Documented and 
            refactored UBC BizTech’s web application frontend in React by following the MVC 
            framework while establishing and communicating new coding standards for the team. 
            Remodeled membership/event registration for 1000+ members by building the authentication 
            system with AWS Cognito and AWS DynamoDB.`,
            technology: ["React", "Node.js", "AWS", "DynamoDB", "HTML", "CSS"],
            web: "https://app.ubcbiztech.com/"
        },
        {
            title: "Conference Director at UBC BizTech Network",
            context: "April 2020 - March 2021",
            content: `Planned and hosted two UBC BizTech online conferences, GameWorld and Blueprint, 
            attracting 250 and 475 attendees respectively. Despite online environment, achieved 75% 
            turnout rate by introducing gamificaiton system to incentivize engagement and retention. 
            Maintained strong relationships with over 20 professional partners for each conference.`,
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