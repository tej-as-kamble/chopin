import { PAYOUT_INFO } from "@/data/EARNINGS_DUMMY";
import "./PayoutsPanel.css";

const PayoutsPanel = () => {
  return (
    <div className="payouts-panel">
      <h3>Next Payout</h3>
      <p className="amount">₹{PAYOUT_INFO.nextPayoutAmount}</p>
      <p className="meta">
        Scheduled on <b>{PAYOUT_INFO.nextPayoutDate}</b>
      </p>

      <div className="divider" />

      <p className="meta">
        Last payout: ₹{PAYOUT_INFO.lastPayoutAmount} on{" "}
        {PAYOUT_INFO.lastPayoutDate}
      </p>
      <p className="meta">
        Bank Account: **** {PAYOUT_INFO.bankLast4}
      </p>
    </div>
  );
};

export default PayoutsPanel;
