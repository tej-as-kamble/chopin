
const ContactInfoCard = ({ data }) => (
  <div className="ri-card">
    <h3>Contact Details</h3>
    <div className="ri-row"><span>Owner</span><strong>{data.owner}</strong></div>
    <div className="ri-row"><span>Manager</span><strong>{data.manager}</strong></div>
    <div className="ri-row"><span>Phone</span><strong>{data.phone}</strong></div>
    <div className="ri-row"><span>Email</span><strong>{data.email}</strong></div>
  </div>
);

export default ContactInfoCard;
