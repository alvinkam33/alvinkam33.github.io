import { Element } from "react-scroll";

import "../styles/about.css";

const About = () => {
    return (
        <Element id="about" name="about">
            <div className="about">
                <h2><b>About Me</b></h2>
                <br></br>
                <p>
                    I am a student based in Vancouver, BC at the <b>University of British Columbia</b>.
                    I'm currently studying for my <b>combined major in computer science and business (BUCS)</b>.
                </p>
                <br></br>
                <p>
                    My goal, no matter the opportunity, is to maximize growth, both on a professional and personal level.
                    This program has given me a variety of challenges that have developed both my technical and soft skills
                    while broadening my perspective and ultimately understanding myself better. My next step is to discover
                    the tech industry, where I envision myself building my career.
                    <br></br>
                </p>
                <h3>My Interests:</h3>
                <br></br>
                <div className="interests_grid">
                    <div className="interest">💵 FinTech</div>
                    <div className="interest">🤖 Machine Learning</div>
                    <div className="interest">🌆 AR/VR</div>
                    <div className="interest">🏒 Sports</div>
                    <div className="interest">🎹 Music</div>
                    <div className="interest">👾 Gaming</div>
                </div>
            </div>
        </Element>
    )
};

export default About;