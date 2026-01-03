import "./OfferRow.css";

const OfferRow = ({ offer }) => {
  return (
    <div className="offer-row">
      <div>
        <strong>
          {offer.type === "PERCENT"
            ? `${offer.value}% OFF`
            : `₹${offer.value} OFF`}
        </strong>
        <p className="meta">
          Min ₹{offer.minOrder} · Cap ₹{offer.cap} · {offer.validDays}
        </p>
      </div>

      <div className="actions">
        {offer.status === "ACTIVE" ? (
          <button>Pause</button>
        ) : (
          <button>Resume</button>
        )}
        <button className="danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default OfferRow;
