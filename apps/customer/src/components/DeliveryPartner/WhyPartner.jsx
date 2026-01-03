const benefits = [
  {
    title: "Flexible Work",
    desc: "Choose when and how long you want to work."
  },
  {
    title: "Local Deliveries",
    desc: "Deliver orders in your nearby areas."
  },
  {
    title: "Earn Per Delivery",
    desc: "Get paid for every successful delivery."
  },
  {
    title: "Transparent System",
    desc: "No hidden charges or registration fees."
  }
];

const WhyPartner = () => {
  return (
    <section className="partner-section">
      <h2>Why Become a Delivery Partner?</h2>
      <div className="benefit-grid">
        {benefits.map((b) => (
          <div key={b.title} className="benefit-card">
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyPartner;
