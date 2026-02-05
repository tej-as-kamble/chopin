import './EmergencyControl.css';
import { PulseCircle } from '@chopin/ui-web';

const EmergencyControl = () => {
  return (
    <div className="srp-emergency-wrapper">
      <div className="srp-emergency-icon-area">
        <PulseCircle color='red' />
      </div>
      <div className="srp-emergency-content">
        <h4>Emergency Shutdown</h4>
        <p>Suspend all operations for today instantly.</p>
      </div>
      <button className="srp-btn-shutdown">INITIATE</button>
    </div>
  );
};

export default EmergencyControl;