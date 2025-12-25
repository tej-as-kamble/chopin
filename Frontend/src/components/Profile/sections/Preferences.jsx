const Preferences = () => {
  return (
    <div className="profile-section-card">
      <h2>Preferences</h2>

      <div className="profile-preferences">
        <select>
          <option>English</option>
          <option>Hindi</option>
        </select>

        <select>
          <option>Veg</option>
          <option>Non-Veg</option>
        </select>
      </div>
    </div>
  );
};

export default Preferences;
