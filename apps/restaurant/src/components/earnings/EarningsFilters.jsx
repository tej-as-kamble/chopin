import "./EarningsFilters.css";

const EarningsFilters = () => {
  return (
    <div className="earnings-filters">
      <input type="date" />
      <input type="date" />
      <select>
        <option>Status</option>
        <option>Paid</option>
        <option>Pending</option>
      </select>
    </div>
  );
};

export default EarningsFilters;
