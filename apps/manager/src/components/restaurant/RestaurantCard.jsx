import { useNavigate } from 'react-router-dom';
import './RestaurantCard.css';
import { FiClock, FiAlertTriangle, FiActivity } from 'react-icons/fi';
import { MdVerified, MdOutlineCancel } from 'react-icons/md';

const RestaurantCard = ({ data }) => {
    const navigate = useNavigate();

    const isPaused = data.status === 'Paused';
    const isVerifying = data.status === 'Under Verification';

    const handleCardClick = () => {
        navigate(`/restaurants/view/${data.id}`);
    };

    return (
        <div
            className={`rest-card ${isPaused ? 'rest-card--paused' : ''}`}
            style={{ backgroundImage: `url(${data.image})` }}
            onClick={handleCardClick}
        >
            <div className="rest-card-content">
                <div className="rest-card-header">
                    <div className="rest-info">
                        <h3 className="rest-name">{data.name}</h3>
                        <span className="rest-area">{data.area}</span>
                    </div>
                    <div className={`status-badge status-${data.status.toLowerCase().replace(' ', '-')}`}>
                        {isVerifying ? <MdVerified /> : <FiActivity />}
                        {data.status}
                    </div>
                </div>

                <div className="rest-card-body">
                    <div className="metric-row">
                        <span className="metric-label">Today's Volume</span>
                        <span className="metric-value">{data.todayOrders} <small>orders</small></span>
                    </div>

                    <div className="rest-meta">
                        <span className="meta-item">
                            <FiClock className="meta-icon" /> Active {data.lastActive}
                        </span>
                    </div>

                    {!isPaused && (
                        <div className="issue-indicators">
                            {data.metrics.delayRisk && (
                                <span className="issue-tag warning">
                                    <FiAlertTriangle /> Delay Risk
                                </span>
                            )}
                            {data.metrics.highCancellations && (
                                <span className="issue-tag critical">
                                    <MdOutlineCancel /> High Cancels
                                </span>
                            )}
                            {data.metrics.complaints > 0 && (
                                <span className="issue-tag critical">
                                    {data.metrics.complaints} Complaints
                                </span>
                            )}
                        </div>
                    )}
                </div>

                <div className="rest-card-footer">
                    {!isPaused && !isVerifying && (<span className="active-text">Accepting orders</span>)}
                    {isPaused && <span className="paused-text">Currently Inactive</span>}
                    {isVerifying && <span className="verifying-text">Pending Approval</span>}
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;