import './InfoCard.css';
import SectionHeader from './SectionHeader';

const InfoCard = ({ wantHeading = true, heading = "Primary Information", icon, data = [] }) => {
    return (
        <div className={`ui-info-card ${wantHeading ? "border" : ""}`}>
            {wantHeading && <SectionHeader heading={heading} icon={icon} />}
            <div className="ui-info-card-body">
                {data.map((row, index) => (
                    <div className="ui-info-card-row" key={index}>
                        <span className="ui-info-card-label">{row.label}</span>
                        <span className="ui-info-card-value">{row.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoCard;