import Accordion from "./Accordion.js";
import { Element } from "react-scroll";

const Projects = () => {
    const items = [
        {
            title: "project1",
            content: "WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS "
        },
        {
            title: "project2",
            content: "WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS "
        },
        {
            title: "project3",
            content: "WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS "
        },
        {
            title: "project4",
            content: "WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS "
        },
        {
            title: "project5",
            content: "WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS WORK IN PROGRESS "
        }
    ];

    return (
        <Element id="projects" name="projects">
            Projects
            <Accordion items={items} />
        </Element>
    );
}

export default Projects;