const AddressInfoCard = ({ data }) => (
  <div className="ri-card">
    <h3>Address</h3>
    <p>{data.line1}</p>
    <p>{data.area}</p>
    <p>{data.city}, {data.state} - {data.pincode}</p>
    <div className="ri-map">Map Preview</div>
  </div>
);

export default AddressInfoCard;
