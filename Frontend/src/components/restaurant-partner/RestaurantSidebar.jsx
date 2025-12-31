import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiShoppingBag,
  FiBookOpen,
  FiDollarSign,
  FiClock,
  FiTag,
  FiAlertCircle,
  FiHelpCircle,
  FiSettings,
  FiLogOut,
  FiHome,
  FiChevronDown,
} from "react-icons/fi";
import { TbLayoutSidebarRightExpand, TbLayoutSidebarRightCollapse } from "react-icons/tb";
import "./RestaurantSidebar.css";

const RestaurantSidebar = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`rs-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="rs-logo">
        <span className="rs-logo-text">LOGO</span>

        <button
          className="rs-toggle-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <TbLayoutSidebarRightCollapse /> : <TbLayoutSidebarRightExpand />}
        </button>
      </div>

      <nav className="rs-nav">
        <NavLink to="restaurant/orders" className="rs-link">
          <FiShoppingBag />
          <span>Orders</span>
        </NavLink>

        <NavLink to="restaurant/menu" className="rs-link">
          <FiBookOpen />
          <span>Menu</span>
        </NavLink>

        <NavLink to="restaurant/earnings" className="rs-link">
          <FiDollarSign />
          <span>Earnings</span>
        </NavLink>

        <NavLink to="restaurant/schedule" className="rs-link">
          <FiClock />
          <span>Schedule</span>
        </NavLink>

        <NavLink to="restaurant/offers" className="rs-link">
          <FiTag />
          <span>Offers</span>
        </NavLink>

        <div className="rs-link rs-disabled">
          <FiHome />
          <span>Outlet (soon)</span>
        </div>

        <NavLink to="restaurant/reviews" className="rs-link">
          <FiAlertCircle />
          <span>Reviews</span>
        </NavLink>

        <NavLink to="restaurant/help" className="rs-link">
          <FiHelpCircle />
          <span>Help</span>
        </NavLink>
      </nav>


      <div className={`rs-settings ${collapsed ? "collapsed" : ""}`}>
        {openSettings && !collapsed && (
          <div className="rs-settings-menu">
            <NavLink to="restaurant/restaurant-info">
              <FiHome /> Restaurant Info
            </NavLink>
            <NavLink to="restaurant/bank-details">
              <FiDollarSign /> Bank Details
            </NavLink>
            <NavLink to="restaurant/logout">
              <FiLogOut /> Logout
            </NavLink>
          </div>
        )}

        <button
          className="rs-settings-btn"
          onClick={() => setOpenSettings(!openSettings)}
        >
          <span className="rs-settings-left">
            <FiSettings />
            {!collapsed && <span>Settings</span>}
          </span>
          <FiChevronDown className={`rs-updown-icon ${openSettings ? "open" : ""}`} />
        </button>
      </div>
    </aside>
  );
};

export default RestaurantSidebar;
