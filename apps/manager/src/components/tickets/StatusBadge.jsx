import './StatusBadge.css';

const StatusBadge = ({ type, label }) => {
  const getClassName = () => {
    const base = 'badge';
    const lowerLabel = label.toLowerCase().replace(" ", "-");
    return `${base} ${type}-${lowerLabel}`;
  };

  return <span className={getClassName()}>{label}</span>;
};

export default StatusBadge;