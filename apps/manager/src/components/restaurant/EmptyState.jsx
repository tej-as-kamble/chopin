import { FiMap } from 'react-icons/fi';
import './EmptyState.css';

const EmptyState = () => {
  return (
    <div className="empty-state-container">
      <div className="empty-illustration">
        <FiMap size={48} color="#94a3b8" />
      </div>
      <h3>No Restaurants Assigned</h3>
      <p>There are currently no restaurants mapped to your area. <br />New assignments will appear here automatically.</p>
    </div>
  );
};

export default EmptyState;