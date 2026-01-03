import { useState } from "react";

const faqs = [
  {
    q: "Is this full-time or part-time?",
    a: "You can work full-time or part-time based on your availability."
  },
  {
    q: "Is there any registration fee?",
    a: "No, joining as a delivery partner is completely free."
  },
  {
    q: "How do I receive payments?",
    a: "Payments are processed through the platform as per payout cycles."
  },
  {
    q: "What if I face issues during delivery?",
    a: "Support is available through the app and help channels."
  }
];

const PartnerFAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="partner-section">
      <h2>Frequently Asked Questions</h2>

      {faqs.map((f, i) => (
        <div key={i} className="faq-item">
          <div
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{f.q}</span>
            <span>{open === i ? "−" : "+"}</span>
          </div>

          {open === i && <p className="faq-answer">{f.a}</p>}
        </div>
      ))}
    </section>
  );
};

export default PartnerFAQ;
