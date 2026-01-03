import { EARNINGS_SUMMARY } from "@/data/EARNINGS_DUMMY";
import "./EarningsSummary.css";

const EarningsSummary = () => {
  const { today, week, month, totalOrders } = EARNINGS_SUMMARY;

  const cards = [
    { label: "Today", value: `₹${today}` },
    { label: "This Week", value: `₹${week}` },
    { label: "This Month", value: `₹${month}` },
    { label: "Orders", value: totalOrders },
  ];

  return (
    <div className="earnings-summary">
      {cards.map((c) => (
        <div key={c.label} className="earnings-card">
          <p>{c.label}</p>
          <h3>{c.value}</h3>
        </div>
      ))}
    </div>
  );
};

export default EarningsSummary;
