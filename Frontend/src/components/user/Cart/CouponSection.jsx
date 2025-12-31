const COUPONS = [
  { code: "SAVE50", desc: "Flat ₹50 off on orders above ₹299", min: 299, value: 50 },
  { code: "FOOD20", desc: "20% off up to ₹100", min: 499, value: 100 },
  { code: "SAVE50", desc: "Flat ₹50 off on orders above ₹299", min: 299, value: 50 },
  { code: "FOOD20", desc: "20% off up to ₹100", min: 499, value: 100 },
  { code: "SAVE50", desc: "Flat ₹50 off on orders above ₹299", min: 299, value: 50 }
];

const CouponSection = ({ subtotal, applied, setApplied }) => {
  return (
    <div className="coupon-section">
      <h3>Available Coupons</h3>

      <div className="coupon-list">
        {COUPONS.map(c => {
          const disabled = subtotal < c.min;
          const active = applied?.code === c.code;

          return (
            <div
              key={c.code}
              className={`coupon-card ${active ? "active" : ""} ${disabled ? "disabled" : ""}`}
              onClick={() => !disabled && setApplied(c)}
            >
              <strong>{c.code}</strong>
              <p>{c.desc}</p>
              {disabled && <small>Min order ₹{c.min}</small>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CouponSection;
