import './Timeline.css';
import SectionHeader from './SectionHeader';

const Timeline = ({ heading = "History & Activity", icon, data = [] }) => {
    return (
        <div className="ui-timeline-wrapper">
            <SectionHeader heading={heading} icon={icon} />
            <div className="ui-timeline-body">
                {data.map((item, index) => (
                    <div key={index} className="ui-timeline-item">
                        <div className="ui-timeline-label">{item.label}</div>
                        <div className="ui-timeline-note">Note: {item.note}</div>
                        <div className="ui-timeline-details">
                            {item.name} • {item.time}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timeline
