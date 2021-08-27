
import { Link } from "react-scroll";

const Header = () => {
    return (
        <header className="header">
            <a href="/" className="home">
                Alvin Kam
            </a>
            <div>
                <Link
                    className="link"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    About Me
                </Link>
                <Link
                    className="link"
                    to="experience"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Experience
                </Link>
                <Link
                    className="link"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    Projects
                </Link>
                <a href="https://github.com/alvinkam33" className="link" rel="noreferrer" target="_blank">
                    Github
                </a>
            </div>
        </header>
    );
};

export default Header;