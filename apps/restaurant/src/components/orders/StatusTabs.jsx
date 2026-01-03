import './StatusTabs.css';

const STATUSES = [
  { key: "accepted", label: "Accepted" },
  { key: "preparing", label: "Preparing" },
  { key: "ready", label: "Ready" },
  { key: "completed", label: "Completed" },
  { key: "rejected", label: "Rejected" },
];

const StatusTabs = ({ activeStatus, onChangeStatus }) => {
  return (
    <div className="rd-orders-status-tabs">
      {STATUSES.map((status) => (
        <button
          key={status.key}
          className={`rd-orders-status-tab ${activeStatus === status.key ? "active" : ""
            }`}
          onClick={() => onChangeStatus(status.key)}
        >
          {status.label}
        </button>
      ))}
    </div>
  );
};

export default StatusTabs;
