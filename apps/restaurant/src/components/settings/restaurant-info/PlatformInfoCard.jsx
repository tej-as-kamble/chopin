
const PlatformInfoCard = ({ data }) => (
  <div className="ri-card">
    <h3>Platform & Compliance</h3>
    <div className="ri-row"><span>Verified</span><strong>{data.verified ? "Yes" : "No"}</strong></div>
    <div className="ri-row"><span>FSSAI</span><strong>{data.fssai}</strong></div>
    <div className="ri-row"><span>GST</span><strong>{data.gst}</strong></div>
    <div className="ri-row"><span>Outlet ID</span><strong>{data.outletId}</strong></div>
    <div className="ri-row"><span>Joined</span><strong>{data.joined}</strong></div>
    <div className="ri-row"><span>Manager</span><strong>{data.manager}</strong></div>
  </div>
);

export default PlatformInfoCard;
