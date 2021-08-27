import { Element } from "react-scroll";

import "../styles/about.css";

const About = () => {
    return (
        <Element id="about" name="about">
            <div className="about">
                <b>About Me</b>
                <br></br>
                <p>
                    I am a student based in Vancouver, BC studying at the <b>University of British Columbia</b>.
                    I'm currently in the <b>combined major of computer science and business program (BUCS)</b>.
                </p>
                <br></br>
                <p>
                    My goal, no matter the opportunity, is to maximize growth, both on a professional and personal level.
                    This program has given me a variety of challenges that have developed both my technical and soft skills
                    while broadening my perspective and ultimately understanding myself better. My next step is to discover
                    the tech industry, where I envision myself building my career.
                    <br></br>
                </p>
                <p>
                    My Interests:
                </p>
                <br></br>
                💻 Technology
                <br></br>
                🏒 Sports
                <br></br>
                🎹 Music
                <br></br>
                👾 Gaming
            </div>
        </Element>
    )
};

export default About;