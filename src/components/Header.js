
import { Link } from "react-scroll";
import ReactSwitch from "react-switch"

const Header = ({ theme, setTheme }) => {
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
                <ReactSwitch 
                    onChange={() => { setTheme(theme === "dark" ? "light" : "dark") }} 
                    checked={theme === 'dark'} 
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onColor="#000000"
                    offColor="#ffffff"
                    offHandleColor="#000000"
                    className="switch"
                />
            </div>
        </header>
    );
};

export default Header;