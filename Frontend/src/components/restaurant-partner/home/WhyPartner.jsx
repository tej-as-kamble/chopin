import "./WhyPartner.css";

const benefits = [
  {
    icon: "🔥",
    title: "High Visibility",
    desc: "Be seen by thousands of hungry customers near you.",
  },
  {
    icon: "⚖️",
    title: "Fair Commissions",
    desc: "Transparent and reasonable charges — no hidden fees.",
  },
  {
    icon: "📈",
    title: "Business Growth",
    desc: "Tools and tips to maximize orders and revenue.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    desc: "Local area manager to help you succeed.",
  },
];

const WhyPartner = () => (
  <section className="restp-why-fancy">
    <h2>Why Partner With Us?</h2>
    <div className="restp-why-cards">
      {benefits.map((b, i) => (
        <div className="restp-why-card" key={i}>
          <div className="restp-card-icon">{b.icon}</div>
          <h3>{b.title}</h3>
          <p>{b.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyPartner;
