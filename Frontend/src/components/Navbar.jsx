import { Link } from "react-router-dom"
import "./Navbar.css";
import logo from '../assets/logo.jpg'
import { FiMapPin } from "react-icons/fi"
import { IoMdLogIn } from "react-icons/io"
import { MdOutlineHelpOutline } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { IoSearch } from "react-icons/io5"
import { BiShoppingBag } from "react-icons/bi"

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo-and-name">
          <img src={logo} alt="Logo" className="navbar-logo" />

          <span className="navbar-app-name">Chopin</span>
        </Link>

        <div className="location-wrapper">
          <Link to="/address" className="navbar-link">
            <p className="navbar-location">Select Location</p>
            <FiMapPin className="location-icon" />
          </Link>
        </div>
      </div>


      <div className="navbar-right">
        <Link to="/help" className="navbar-link">
          <MdOutlineHelpOutline className="nav-icon" /><span>Need Help</span>
        </Link>

        {isLoggedIn ? (
          <>
            <Link to="/search" className="navbar-link">
              <IoSearch className="nav-icon" /><span>Search</span>
            </Link>
            <Link to="/cart" className="navbar-link">
              <BiShoppingBag className="nav-icon" /><span>Cart</span>
            </Link>
            <Link to="/profile" className="navbar-link">
              <CgProfile className="nav-icon" /><span>Profile</span>
            </Link>
          </>
        ) : (
          <Link to="/login" className="navbar-link">
            <IoMdLogIn className="nav-icon" /><span>Login</span>
          </Link>
        )}
      </div>
    </nav >
  );
};

export default Navbar;
