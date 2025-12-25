const steps = [
  "Download the Delivery Partner App",
  "Register and verify your details",
  "Accept delivery requests",
  "Deliver orders and earn"
];

const HowItWorks = () => {
  return (
    <section className="partner-section">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, i) => (
          <div key={i} className="step">
            <span>{i + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
