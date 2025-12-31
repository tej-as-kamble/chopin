import { useState } from "react";

const moreFaqs = [
  {
    question: "How can I cancel my order?",
    answer:
      "You can cancel your order from the Orders section before it is prepared by the restaurant."
  },
  {
    question: "What if I receive incorrect items?",
    answer:
      "If you receive incorrect items, raise a support request from the Help page and our team will assist you."
  },
  {
    question: "How are delivery charges calculated?",
    answer:
      "Delivery charges depend on distance, order value, and area-based policies."
  },
  {
    question: "Why is a restaurant not available?",
    answer:
      "Restaurants may be unavailable due to closing hours, high demand, or temporary issues."
  },
  {
    question: "Is online payment secure?",
    answer:
      "Yes, all online payments are processed through secure and trusted payment gateways."
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact customer support through the Contact Us page or raise a request from the Help section."
  }
];

const MoreFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>More Questions</h2>

      {moreFaqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </div>

          {openIndex === index && (
            <p className="faq-answer">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default MoreFAQ;
