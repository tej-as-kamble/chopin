import { useState } from "react";
import { Link } from "react-router-dom";

const SavedAddresses = () => {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="profile-section-card">
      <h2>Saved Addresses</h2>

      <div className="profile-address-card">
        <div>
          <h4>Home</h4>
          <p>IIT ISM Dhanbad, Jharkhand 826004</p>
        </div>
        <span className="profile-badge">Primary</span>
      </div>

      <div className="profile-address-card">
        <div>
          <h4>Work</h4>
          <p>City Center, Dhanbad, Jharkhand</p>
        </div>
        <div className="profile-payment-action">
          <button className="profile-link-btn">Make default</button>
          <button
            className="profile-danger-text"
            onClick={() => setShowConfirm(true)}
          >
            Delete
          </button>
        </div>

      </div>

      <Link to="/change-address" className="profile-primary-btn">
        Add / Edit Address
      </Link>

      {showConfirm && (
        <div className="profile-modal">
          <div className="profile-modal-box">
            <p>Delete this address?</p>
            <div>
              <button onClick={() => setShowConfirm(false)}>Cancel</button>
              <button className="profile-danger-btn">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedAddresses;
