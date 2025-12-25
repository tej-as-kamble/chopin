import { useState } from "react";

const Security = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="profile-section-card">
      <h2>Security</h2>

      <div className="profile-security-card">
        <h4>Change Password</h4>
        <button onClick={() => setOpen(!open)}>Change</button>
      </div>

      {open && (
        <div className="profile-form-grid">
          <input type="password" placeholder="Current password" />
          <input type="password" placeholder="New password" />
          <button className="profile-primary-btn">Update</button>
          <p className="profile-success-text">Password updated successfully</p>
        </div>
      )}

      <div className="profile-security-card">
        <h4>Login Info</h4>
        <p>Last login: Today, Chrome on Windows</p>
      </div>

      <div className="profile-security-card">
        <h4>Account Safety</h4>
        <p>Keep your account secure by not sharing OTPs.</p>
      </div>
    </div>
  );
};

export default Security;
