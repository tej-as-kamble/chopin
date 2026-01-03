const PersonalDetails = () => {
  return (
    <div className="profile-section-card">
      <h2>Personal Details</h2>

      <div className="profile-image">
        <img src="https://via.placeholder.com/120" alt="profile" />
      </div>

      <div className="profile-form-grid">
        <input defaultValue="Tejas Kamble" />
        <input defaultValue="+91 90000 00000" />
        <input value="tejas@email.com" disabled />
        <input defaultValue="Male" />
        <input defaultValue="2002-01-01" type="date" />
      </div>

      <button className="profile-primary-btn">Save Changes</button>
    </div>
  );
};

export default PersonalDetails;
