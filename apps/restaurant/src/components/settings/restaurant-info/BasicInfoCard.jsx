const BasicInfoCard = ({ data }) => {
  return (
    <div className="ri-card">
      <h3>Basic Details</h3>

      <div className="ri-row">
        <span>Restaurant Name</span>
        <strong>{data.name}</strong>
      </div>

      <div className="ri-row">
        <span>Outlet</span>
        <strong>{data.outlet}</strong>
      </div>

      <div className="ri-row">
        <span>Type</span>
        <strong>{data.type}</strong>
      </div>

      <div className="ri-chips">
        {data.cuisines.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </div>
    </div>
  );
};

export default BasicInfoCard;
