import { useState } from "react";
import EarningsSummary from "@/components/restaurant-partner/earnings/EarningsSummary";
import EarningsTabs from "@/components/restaurant-partner/earnings/EarningsTabs";
import EarningsFilters from "@/components/restaurant-partner/earnings/EarningsFilters";
import TransactionsTable from "@/components/restaurant-partner/earnings/TransactionsTable";
import PayoutsPanel from "@/components/restaurant-partner/earnings/PayoutsPanel";
import "./EarningsPage.css";

const EarningsPage = () => {
  const [activeTab, setActiveTab] = useState("payouts");

  return (
    <div className="earnings-page">
      <h1 className="earnings-title">Earnings</h1>

      <EarningsSummary />

      <EarningsTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "transactions" && (
        <>
          <EarningsFilters />
          <TransactionsTable />
        </>
      )}

      {activeTab === "payouts" && <PayoutsPanel />}
    </div>
  );
};

export default EarningsPage;
