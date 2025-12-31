import "./SupportCard.css";

const SupportCard = ({ data }) => {
  return (
    <div className="sp-card">
      <div className="sp-icon">{data.icon}</div>
      <h3>{data.role}</h3>
      <p className="sp-name">{data.name}</p>

      <div className="sp-info">
        <a href={`tel:${data.phone}`}>{data.phone}</a>
        <a href={`mailto:${data.email}`}>{data.email}</a>
      </div>

      <span className="sp-hours">{data.hours}</span>
      <small>Call for urgent issues</small>
    </div>
  );
};

export default SupportCard;
