import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";
import "../styles/intro.css";

const Intro = () => {
    return (
        <div className="intro">
            <h1><b className="hello">Hello!</b></h1>
            <br></br>
            <div className="animation">
                <TypeAnimation
                    sequence={[
                        ">>> I am Alvin Kam 😎",
                        1500,
                        ">>> I am an aspiring developer 💻",
                        1500,
                        ">>> I am a UBC student 🏙️",
                        1500,
                        ">>> I am a Vancouver Canucks fan 🐋",
                        1500,
                        ">>> I am always happy to talk! 👋",
                        1500,
                    ]}
                    repeat={Infinity}
                    className="introAnimation"
                />
            </div>
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