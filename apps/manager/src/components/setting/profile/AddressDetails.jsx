import './AddressDetails.css';
import { SectionHeader } from '@chopin/ui-web';
import { FaMapMarkedAlt } from "react-icons/fa";

const AddressDetails = ({ data }) => {
    return (
        <>
            <SectionHeader
                heading={"Current Address"}
                icon={<FaMapMarkedAlt />}
            />
            <div className="addr-card">
                <div className="addr-content">
                    <p className="addr-street">{data.street}</p>
                    <p className="addr-line">{data.city}, {data.state}</p>
                    <p className="addr-line">{data.country} - {data.postalCode}</p>
                </div>

                <div className="addr-actions">
                    <button className="btn-secondary">View on Map</button>
                </div>
            </div>
        </>
    );
};

export default AddressDetails;