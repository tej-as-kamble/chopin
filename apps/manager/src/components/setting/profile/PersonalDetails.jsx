import './PersonalDetails.css';
import { SectionHeader } from '@chopin/ui-web';
import { BiSolidContact } from "react-icons/bi";


const PersonalDetails = ({ data }) => {

    const DetailItem = ({ label, value }) => (
        <div className="pd-item">
            <label>{label}</label>
            <p>{value}</p>
        </div>
    );

    return (
        <>
            <SectionHeader
                heading={"Personal Information"}
                icon={<BiSolidContact />}
            />
            <div className="pd-card">
                <div className="pd-header">
                    <div className="pd-avatar">
                        {data.fullName.charAt(0)}
                    </div>
                    <div className="pd-title-group">
                        <h2 className="pd-name">{data.fullName}</h2>
                        <span className="pd-role">{data.role}</span>
                    </div>
                    <span className="pd-badge">Active</span>
                </div>

                <div className="pd-grid">
                    <DetailItem label="Employee ID" value={data.employeeId} />
                    <DetailItem label="Email Address" value={data.email} />
                    <DetailItem label="Phone Number" value={data.phone} />
                    <DetailItem label="Date of Joining" value={data.joinDate} />
                    <DetailItem label="Date of Birth" value={data.dob} />
                    <DetailItem label="Gender" value={data.gender} />
                </div>
            </div>
        </>
    );
};

export default PersonalDetails;