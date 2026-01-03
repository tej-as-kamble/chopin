import { useState } from "react";

const Payments = () => {
  const [confirm, setConfirm] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [type, setType] = useState("upi");

  return (
    <div className="profile-section-card">
      <h2>Payment Methods</h2>

      <h4>UPI</h4>
      <div className="profile-payment-card">
        <span>tejas@okaxis</span>
        <span className="profile-badge">Primary</span>
      </div>

      <h4>Cards</h4>
      <div className="profile-payment-card">
        <span>**** **** **** 1234</span>
        <div className="profile-payment-action">
          <button className="profile-link-btn">Set primary</button>
          <button
            className="profile-danger-text"
            onClick={() => setConfirm(true)}
          >
            Remove
          </button>
        </div>
      </div>

      <button
        className="profile-primary-btn"
        onClick={() => setShowAdd(true)}
      >
        Add New Payment Method
      </button>

      {confirm && (
        <div className="profile-modal">
          <div className="profile-modal-box">
            <p>Remove this payment method?</p>
            <div>
              <button onClick={() => setConfirm(false)}>Cancel</button>
              <button className="profile-danger-btn">Remove</button>
            </div>
          </div>
        </div>
      )}

      {showAdd && (
        <div className="profile-modal">
          <div className="profile-modal-box">
            <h3>Add Payment Method</h3>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="upi">UPI</option>
              <option value="card">Card</option>
            </select>

            {type === "upi" && (
              <input
                type="text"
                placeholder="Enter UPI ID"
              />
            )}

            {type === "card" && (
              <>
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Expiry (MM/YY)" />
                <input type="text" placeholder="CVV" />
              </>
            )}

            <div>
              <button onClick={() => setShowAdd(false)}>Cancel</button>
              <button className="profile-primary-btn">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payments;
