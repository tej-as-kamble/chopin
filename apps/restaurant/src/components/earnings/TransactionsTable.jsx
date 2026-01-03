import { TRANSACTIONS } from "@/data/EARNINGS_DUMMY";
import "./TransactionsTable.css";

const TransactionsTable = () => {
  return (
    <div className="transactions-table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Order</th>
            <th>Gross</th>
            <th>Commission</th>
            <th>Net</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {TRANSACTIONS.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>{t.orderId}</td>
              <td>₹{t.gross}</td>
              <td>₹{t.commission}</td>
              <td>₹{t.net}</td>
              <td className={t.status === "Paid" ? "paid" : "pending"}>
                {t.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
