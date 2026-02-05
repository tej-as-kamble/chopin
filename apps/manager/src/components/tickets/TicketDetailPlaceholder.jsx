import { FiInbox, FiArrowLeft } from 'react-icons/fi';
import './TicketDetailPlaceholder.css';

const TicketDetailPlaceholder = ({ hasSelection }) => {
  return (
    <div className="detail-placeholder">
      <div className="placeholder-content">
        <div className="placeholder-icon">
          {hasSelection ? <FiArrowLeft /> : <FiInbox />}
        </div>
        <h3>{hasSelection ? "Loading Ticket Details..." : "Select a ticket"}</h3>
        <p>
          {hasSelection
            ? "Fetching conversation history and order details."
            : "View details, reply to customers, or resolve issues from this panel."}
        </p>
      </div>
    </div>
  );
};

export default TicketDetailPlaceholder;