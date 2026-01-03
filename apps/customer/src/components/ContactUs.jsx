import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully");
  };

  return (
    <div className="contact-page">
      <div className="contact-top">
        <h1>Contact Us</h1>
        <p>Support, feedback, or business inquiries — we’re here.</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info-box">
          <h2>Reach Us</h2>

          <div className="info-item">
            <FaEnvelope />
            <p>support@yourapp.com</p>
          </div>

          <div className="info-item">
            <FaPhoneAlt />
            <p>+91 90000 00000</p>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <p>India</p>
          </div>

          <div className="social-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
        </div>


        <div className="contact-form-box">
          <h2>Send a Message</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" />
            <textarea rows="5" placeholder="Your Message" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
