import './AdminDetails.css';
import { InfoCard, SectionHeader } from '@chopin/ui-web';
import { FaUserSecret } from "react-icons/fa";

const AdminDetails = () => {
    const adminProfile = {
        name: "Tejas Kamble",
        role: "Admin",
        photoUrl: "https://i.pravatar.cc/150?u=me",
        info: [
            { label: "Contact", value: "+91 97815 14513" },
            { label: "Email", value: "admin@dimenssion.com" },
            { label: "Languages", value: "Hindi, English, Marathi" },
        ]
    };

    return (
        <>
            <SectionHeader
                heading={"Contact Admin"}
                icon={<FaUserSecret style={{ color: "#ffe7bd" }} />}
            />
            <div className="hpad-profile-card">
                <div className="hpad-avatar-container">
                    <img src={adminProfile.photoUrl} alt="Admin" className="hpad-admin-photo" />
                    <h3>{adminProfile.name}</h3>
                    <p className="hpad-role-badge">{adminProfile.role}</p>
                </div>
                <div className="hpad-action-buttons">
                    <button className="hpad-btn-1">Email</button>
                    <button className="hpad-btn-2">Call Now</button>
                </div>
            </div>
            <InfoCard wantHeading={false} data={adminProfile.info} />
        </>
    );
};

export default AdminDetails;