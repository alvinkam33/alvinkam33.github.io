import Accordion from "./Accordion.js";
import { Element } from "react-scroll";
import '../styles/accordion.css';

const Experience = () => {
    const items = [
        {
            title: "Software Engineer Intern at Tesla - Insurance",
            context: "June 2024 - Present",
            content: `Joined the Insurance team to develop the Tesla Insurance platform and rating 
            initiatives using C# and .NET.`,
            technology: ["C#", ".NET", "MySQL", "Jenkins", "Redis"],
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
            content: `Hastened vehicle firmware communications by 30% by redeveloping internal 
            progress-tracking pages using Ruby on Rails, React and 100% test coverage with RSpec and 
            Mocha to ensure bug-free deployment. Reduced rollout progress update delays from 2 hours 
            to 1 minute by migrating the existing automated vehicle query system and implementing a 
            modular, user-controlled app. Coordinated development cycle between cross-functional teams 
            to complete features 25% ahead of schedule.`,
            technology: ["Ruby on Rails", "React", "RSpec", "Mocha"],
            web: "https://www.tesla.com/about"
        },
        {
            title: "Associate Software Developer Intern at Konrad Group",
            context: "May 2023 - August 2023",
            content: `Accelerated QA and onboarding processes by 25% by building an action-tracking 
            chrome extension with TypeScript, HTML/SCSS and an Express.js API using PostgreSQL to 
            visualize various procedures. Diminished latency of company’s internal directory by 40% by 
            implementing server-side pagination and filtering alongside React hooks to cache data and 
            avoid re-rendering. Established flawless CI/CD pipeline on new projects leveraging Docker, 
            GitHub Actions and AWS EC2.`,
            technology: ["TypeScript", "HTML", "SCSS", "Express.js", "PostgreSQL", "Prisma", "Docker", "GitHub Actions", "AWS", "React"],
            web: "https://www.konrad.com/about"
        },
        {
            title: "Lead Developer at UBC BizTech Network",
            context: "April 2022 - March 2023",
            content: `Promoted to lead developer position over UBC BizTech's development team. 
            Optimized team efficiency by over 400% through improving work processes, strengthening 
            team culture and enhancing communication with stakeholders. Oversaw and supported responsibilities 
            of other developers while building multiple features such as the development environment, 
            payment integration, test pipeline, admin functionality and gamification system.`,
            technology: ["React", "Node.js", "AWS", "DynamoDB", "HTML", "CSS", "Mocha", "Firebase", "Serverless"],
            web: "https://app.ubcbiztech.com/"
        },
        {
            title: "Software Developer Intern at Convergence",
            context: "September 2021 - September 2022",
            content: `Architected a knowledge base from scratch for a client’s $5M software platform, designing and leading
            the development of the app using TypeScript, React, Node.js, Strapi and MongoDB. Boosted SEO of company’s website, 
            increasing website traffic by 900% by developing an automated sitemap and meta tags solution using AWS S3, CloudFront 
            and Lambda. Enhanced a client’s app performance and reliability by 30% by refactoring the Node.js REST API and 
            webhooks to reduce unnecessary network activity.`,
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