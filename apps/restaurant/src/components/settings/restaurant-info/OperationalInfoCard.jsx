
const OperationalInfoCard = ({ data }) => (
  <div className="ri-card">
    <h3>Operational Snapshot</h3>
    <div className="ri-row"><span>Status</span><strong>{data.status}</strong></div>
    <div className="ri-row"><span>Orders</span><strong>{data.acceptingOrders ? "Accepting" : "Paused"}</strong></div>
    <div className="ri-row"><span>Prep Time</span><strong>{data.prepTime}</strong></div>
    <div className="ri-row"><span>Delivery Radius</span><strong>{data.radius}</strong></div>
  </div>
);

export default OperationalInfoCard;
