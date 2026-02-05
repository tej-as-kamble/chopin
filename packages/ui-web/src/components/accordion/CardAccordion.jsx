import { useState } from 'react';
import './CardAccordion.css';

const CardAccordion = ({ data = [] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="accordion-container">
            {data.map((item, index) => (
                <div
                    key={item.id}
                    className={`accordion-card ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => toggleAccordion(index)}
                >
                    <div className="card-header">
                        <h3 className="question-text">{item.question}</h3>
                        <span className={`chevron ${activeIndex === index ? 'rotate' : ''}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </span>
                    </div>

                    <div className={`card-body ${activeIndex === index ? 'open' : ''}`}>
                        <div className="answer-content">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardAccordion;