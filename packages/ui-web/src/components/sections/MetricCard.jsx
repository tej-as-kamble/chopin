import './MetricCard.css';

const MetricCard = ({ label, value }) => {
  return (
    <div className="ui-metric-card">
      <div className="ui-metric-card-value">{value}</div>
      <div className="ui-metric-card-label">{label}</div>
    </div>
  );
};

export default MetricCard;