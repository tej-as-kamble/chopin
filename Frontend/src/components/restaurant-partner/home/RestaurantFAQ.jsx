import "./RestaurantFAQ.css";

const faqs = [
  { q: "Who handles delivery?", a: "You choose your preferred partner." },
  { q: "How are payouts processed?", a: "Weekly bank transfers." },
  { q: "Can I pause orders?", a: "Yes — anytime from dashboard." },
  { q: "Who controls discounts?", a: "You set offers and promotions." },
];

const RestaurantFAQ = () => (
  <section className="restp-faq-fancy">
    <h2>Frequently Asked Questions</h2>

    {faqs.map((f, i) => (
      <details key={i}>
        <summary>{f.q}</summary>
        <p>{f.a}</p>
      </details>
    ))}
  </section>
);

export default RestaurantFAQ;
