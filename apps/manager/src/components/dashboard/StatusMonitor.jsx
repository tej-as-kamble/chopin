import './StatusMonitor.css';
import { PulseCircle, SectionHeader } from '@chopin/ui-web';
import { RiDashboardFill } from "react-icons/ri";

export const StatusMonitor = ({ data }) => {
  return (
    <>
      <SectionHeader heading="Operational Health" icon={<RiDashboardFill />} />
      <div className="dashboard-status-monitor">
        <div className="dashboard-status-info">
          <p>{data.message}</p>
        </div>
        <div className="dashboard-status-indicator">
          <PulseCircle color='yellow' />
          <span className="dashboard-status-text">{data.status}</span>
        </div>
      </div>
    </>
  );
};