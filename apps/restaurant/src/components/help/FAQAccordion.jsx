import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./FAQAccordion.css";

const FAQAccordion = ({ faqs }) => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-wrap">
      {faqs.map((faq) => (
        <div key={faq.id} className="faq-item" onClick={() => toggle(faq.id)}>
          <div className="faq-header" >
            <div className="faq-q">{faq.question}</div>

            <FiChevronDown
              className={`faq-icon ${openId === faq.id ? "open" : ""}`}
            />
          </div>

          {openId === faq.id && (
            <div className="faq-a">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
