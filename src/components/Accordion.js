import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/accordion.css';

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
            return;
        }
        setActiveIndex(index);
    };
    
    const techStack = (tech) => {
        return tech.map((t) => {
            return (
                <div className="tech" key={t}>
                    {t}
                </div>
            );
        });
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div
                    className={`title ${active}`}
                    onClick={() => onTitleClick(index)}
                >
                    <div className="title_text">
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                </div>
                <div className={`content ${active}`}>
                    <p className="context">{item.context}</p>
                    {item.video && 
                        <iframe 
                            src={item.video + "?autoplay=1&mute=1&showinfo=0&controls=0"} 
                            title={item.video}
                            width="100%"
                            height="400px"
                            style={{ border: "none" }}
                        />
                    }
                    {item.image &&
                        <img 
                            src={item.image}
                            alt={item.title}
                            width="100%"
                            style={{ marginBottom: "1em", borderRadius: "0.5em" }}
                        />
                    }
                    <p className="item_content">{item.content}</p>
                    <div className="tech_container">
                        {item.technology && (techStack(item.technology))}
                    </div>
                    <div className="links container">
                        {item.github && (
                            <a href={item.github} rel="noreferrer" target="_blank">
                                <FaGithub className="links" />
                            </a>
                        )}
                        {item.web && (
                            <a href={item.web} rel="noreferrer" target="_blank">
                                <FaExternalLinkAlt className="links" />
                            </a>
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    });

    return <div className="ui inverted segment">
        <div className="ui inverted accordion">
            {renderedItems}
        </div>
    </div>
};

export default Accordion;