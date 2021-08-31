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
        const renderedTech = tech.map((t) => {
            return (
                <div className="tech" key={t}>
                    {t}
                </div>
            );
        });
        return renderedTech;
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
                    <p>{item.content}</p>
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