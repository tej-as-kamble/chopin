import { FaUser, FaMapMarkerAlt, FaCreditCard, FaSlidersH, FaShieldAlt, FaFileAlt, FaSignOutAlt } from "react-icons/fa";

const menu = [
    { id: "personal", label: "Personal Details", icon: <FaUser /> },
    { id: "addresses", label: "Saved Addresses", icon: <FaMapMarkerAlt /> },
    { id: "payments", label: "Payment Methods", icon: <FaCreditCard /> },
    { id: "preferences", label: "Preferences", icon: <FaSlidersH /> },
    { id: "security", label: "Security", icon: <FaShieldAlt /> },
    { id: "legal", label: "Legal & Info", icon: <FaFileAlt /> }
];

const ProfileSidebar = ({ active, setActive }) => {
    return (
        <div className="profile-sidebar">
            {menu.map((m) => (
                <button
                    key={m.id}
                    className={`profile-menu-btn ${active === m.id ? "active" : ""}`}
                    onClick={() => setActive(m.id)}
                >
                    {m.icon}
                    <span>{m.label}</span>
                </button>
            ))}

            <button
                className="profile-logout-btn"
                onClick={() => (window.location.href = "/")}
            >
                <FaSignOutAlt />
                <span>Logout</span>
            </button>
        </div>
    );
};

export default ProfileSidebar;
