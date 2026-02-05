import { SectionHeader } from '@chopin/ui-web';
import './LiveSnapshot.css';
import { FaHotel } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";

export const RestaurantSnapshot = ({ data }) => {
  return (
    <>
      <SectionHeader
        heading="Restaurant Partners"
        icon={<FaHotel />}
      />
      <div className="dashboard-snapshot-panel">
        <div className="dash-sp-stat-group">
          <div className="dash-sp-stat-item">
            <span className="label">Online</span>
            <span className="value">{data.restaurants.online}/{data.restaurants.total}</span>
          </div>
          <div className="dash-sp-stat-item">
            <span className="label">Congested</span>
            <span className="value" style={{ color: 'var(--ovp-accent-rose)' }}>
              {data.restaurants.congested}
            </span>
          </div>
        </div>
        <div className="dash-sp-congested-list">
          <div className="dash-sp-congested-title">Attention Needed</div>
          {data.restaurants.topCongested.map((r, i) => (
            <div key={i} className="dash-sp-congested-item">
              <span>{r.name}</span>
              <span>+{r.wait} wait</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const FleetSnapshot = ({ data }) => {
  return (
    <>
      <SectionHeader
        heading="Delivery Partners"
        icon={<BiSolidContact />}
      />
      <div className="dashboard-snapshot-panel">
        <div className="dash-sp-stat-group">
          <div className="dash-sp-stat-item">
            <span className="label">Active Riders</span>
            <span className="value">{data.partners.active}</span>
          </div>
          <div className="dash-sp-stat-item">
            <span className="label">Coverage</span>
            <span className="value" style={{ color: 'var(--ovp-accent-emerald)' }}>
              {data.partners.zoneCoverage}
            </span>
          </div>
        </div>

        <div style={{ height: '6px', background: '#edf2f7', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: '81%', background: 'var(--ovp-accent-blue)', height: '100%' }}></div>
        </div>
        <div style={{ marginTop: '8px', fontSize: '12px', color: 'var(--ovp-text-muted)' }}>
          81% Utilization
        </div>
      </div>
    </>
  );
};