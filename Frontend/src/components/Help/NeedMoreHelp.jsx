import { Link } from "react-router-dom";

const NeedMoreHelp = () => {
  return (
    <div className="need-more-help">
      <h2>Still need help?</h2>

      <div className="help-actions">
        <Link to="/contact-us">Contact Us</Link>
        <button disabled>Chat Support (Coming Soon)</button>
        <button disabled>Raise Ticket (Not Available)</button>
      </div>
    </div>
  );
};

export default NeedMoreHelp;
