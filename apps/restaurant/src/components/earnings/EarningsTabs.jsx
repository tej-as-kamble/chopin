import "./EarningsTabs.css";

const EarningsTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="earnings-tabs">
      <button
        className={activeTab === "payouts" ? "active" : ""}
        onClick={() => setActiveTab("payouts")}
      >
        Payouts
      </button>
      <button
        className={activeTab === "transactions" ? "active" : ""}
        onClick={() => setActiveTab("transactions")}
      >
        Transactions
      </button>
    </div>
  );
};

export default EarningsTabs;
