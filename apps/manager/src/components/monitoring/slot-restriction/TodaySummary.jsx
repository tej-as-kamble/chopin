import { PulseCircle, SectionHeader } from '@chopin/ui-web';
import './TodaySummary.css';
import { MdToday } from "react-icons/md";

const TodaySummary = ({ data }) => {
    return (
        <>
            <SectionHeader
                heading={"Today's Slot"}
                icon={<MdToday />}
            />
            <div className="srp-summary-wrapper">
                <div className="srp-summary">
                    <p className="srp-metric-value">Today's operating time is <b>{data.restaurantSlot.start} - {data.restaurantSlot.end}</b></p>
                </div>
                <div className="srp-status-indicator">
                    <PulseCircle color='green' />
                    <span className="srp-status-text">{data.status}</span>
                </div>
            </div>
        </>
    );
};

export default TodaySummary;