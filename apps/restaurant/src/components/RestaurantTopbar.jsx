import React, { useState } from "react";
import "./RestaurantTopbar.css";

const RestaurantTopbar = () => {
  const [online, setOnline] = useState(true);

  return (
    <header className={`rd-topbar ${online ? "online" : "offline"}`}>
      <div className="rd-topbar-left">
        <h2 className="rd-restaurant-name">Spice Hub</h2>
        <span className="rd-restaurant-id">#REST-1021</span>
      </div>

      <div className="rd-topbar-right">
        <div
          className={`rd-status-badge ${online ? "online" : "offline"}`}
        >
          {online ? "Online" : "Offline"}
        </div>

        <label className="rd-switch">
          <input
            type="checkbox"
            checked={online}
            onChange={() => setOnline(!online)}
          />
          <span className="rd-slider" />
        </label>
      </div>
    </header>
  );
};

export default RestaurantTopbar;
