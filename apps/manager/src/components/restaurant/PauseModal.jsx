import { useState } from 'react';
import './PauseModal.css';
import { FiX, FiAlertOctagon } from 'react-icons/fi';

const PauseModal = ({ restaurant, onClose, onConfirm }) => {
  const [reason, setReason] = useState('');

  if (!restaurant) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title-group">
            <FiAlertOctagon className="modal-icon-danger" />
            <h2>Pause Operations</h2>
          </div>
        </div>
          <button className="btn-close" onClick={onClose}><FiX /></button>

        <div className="modal-body">
          <p className="modal-desc">
            You are about to pause <strong>{restaurant.name}</strong>. This will instantly stop all incoming orders.
          </p>

          <label className="input-label">Reason for pausing</label>
          <textarea
            className="reason-input"
            placeholder="e.g., Kitchen overflow, power outage, staff shortage..."
            rows="4"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button
            className="btn-confirm"
            onClick={() => onConfirm(restaurant.id, reason)}
            disabled={!reason.trim()}
          >
            Confirm Pause
          </button>
        </div>
      </div>
    </div>
  );
};

export default PauseModal;