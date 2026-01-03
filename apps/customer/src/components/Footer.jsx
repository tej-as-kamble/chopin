import "./Footer.css";
import { Link, useNavigate } from "react-router-dom"
import logo from "@/assets/logo.jpg";
import { FaLinkedin, FaInstagram, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="logo-and-name">
            <img src={logo} alt="Logo" className="navbar-logo" />

            <span className="navbar-app-name">Chopin</span>
          </Link>
          <p>© 2025 Chopin Limited</p>
        </div>


        <div>
          <h4>Company</h4>
          <p onClick={() => navigate('/about')}>About Us</p>
          <p>Careers</p>
          <p>Team</p>
        </div>


        <div>
          <h4>Contact us</h4>
          <p>Help & Support</p>
          <p>Partner with us</p>
          <p>Ride with us</p>
        </div>


        <div>
          <h4>Available in</h4>
          <p>Bangalore</p>
          <p>Delhi</p>
          <p>Mumbai</p>
          <select>
            <option>679 cities</option>
          </select>
        </div>


        <div>
          <h4>Social Links</h4>
          <div className="social-icons">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaPinterest />
            <FaTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
