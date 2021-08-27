import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import "../styles/intro.css";

const Intro = () => {
    return (
        <div className="intro">
            <h1><b className="hello">Hello!</b></h1>
            <br></br>
            <h2>I'm Alvin Kam, passionate about software development and product management.</h2>
            <br></br>
            <a href="https://github.com/alvinkam33" rel="noreferrer" target="_blank" className="link_icon">
                <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/alvin-kam/" rel="noreferrer" target="_blank" className="link_icon">
                <FaLinkedin/>
            </a>
            <a href="mailto:alvin.kam.33@gmail.com" rel="noreferrer" target="_blank" className="link_icon">
                <HiMail/>
            </a>
        </div>
    );
};

export default Intro;