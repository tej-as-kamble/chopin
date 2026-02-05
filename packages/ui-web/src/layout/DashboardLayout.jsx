import { Outlet } from 'react-router-dom';
import './DashboardLayout.css';

const DashboardLayout = ({ sidebarSlot, topbarSlot, children }) => {
  return (
    <div className="dl-container">
      {sidebarSlot || <div style={{ padding: 20 }}>Sidebar Placeholder</div>}

      <main className="dl-main-wrapper">
        {topbarSlot || <div style={{ padding: 20 }}>TopBar Placeholder</div>}

        <div className="dl-content-scrollable">
          <div className="dl-content-inner">
            {children ? children : <Outlet />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;