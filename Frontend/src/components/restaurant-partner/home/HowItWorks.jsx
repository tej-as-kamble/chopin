import "./HowItWorks.css";

const steps = [
  {
    icon: "📥",
    title: "Submit Details",
    desc: "Fill in your restaurant information.",
  },
  {
    icon: "📝",
    title: "Verify Documents",
    desc: "Upload valid FSSAI, GST, and bank info.",
  },
  {
    icon: "🍽️",
    title: "Set Up Menu",
    desc: "Add items, prices, and images easily.",
  },
  {
    icon: "🚀",
    title: "Go Live",
    desc: "Start receiving orders instantly!",
  },
];

const HowItWorks = () => (
  <section className="restp-steps-fancy">
    <h2>How Registration Works</h2>

    {steps.map((s, i) => (
      <div className="restp-step-card" key={i}>
        <div className="restp-step-icon">{s.icon}</div>
        <h3>{s.title}</h3>
        <p>{s.desc}</p>
      </div>
    ))}
  </section>
);

export default HowItWorks;
