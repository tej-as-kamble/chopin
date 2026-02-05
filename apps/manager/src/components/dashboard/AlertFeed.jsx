import './AlertFeed.css';
import { SectionHeader } from '@chopin/ui-web';
import { RiNotificationBadgeFill } from "react-icons/ri";

export const AlertFeed = ({ alerts }) => {
  return (
    <>
      <SectionHeader
        heading={`Live Signals (${alerts.length})`}
        icon={<RiNotificationBadgeFill />}
      />
      <div className="dashboard-alert-feed">
        {alerts.map((alert) => (
          <div key={alert.id} className={`dash-af-alert-item ${alert.severity}`}>
            <span className="dash-af-alert-time">{alert.time}</span>
            <div className="dash-af-alert-text">{alert.text}</div>
          </div>
        ))}
      </div>
    </>
  );
};