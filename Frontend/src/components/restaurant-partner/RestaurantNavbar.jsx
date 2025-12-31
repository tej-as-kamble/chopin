import { Link } from "react-router-dom"
import "./RestaurantNavbar.css";
import logo from '@/assets/logo.jpg'

const RestaurantNavbar = () => {
  return (
    <nav className="restp-navbar">
      <div className="restp-navbar-inner">
        <Link to="/" className="logo-and-name">
          <img src={logo} alt="Logo" className="navbar-logo" />

          <span className="navbar-app-name">Chopin</span>
        </Link>

        <div className="restp-navbar-actions">
          <a href="/partner/restaurant" className="restp-navbar-link">
            Partner with us
          </a>
          <a href="/partner/restaurant/orders" className="restp-navbar-link">
            Dashboard
          </a>
          <a
            href="/partner/restaurant/login"
            className="restp-navbar-btn"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default RestaurantNavbar;
