import "./RegistrationStatusPage.css";

const RegistrationStatusPage = () => {
  const status = "PENDING"; // PENDING | REJECTED | BLOCKED

  return (
    <div className="status-page">
      <div className={`status-badge ${status.toLowerCase()}`}>
        {status}
      </div>

      <h2 className="auth-title">
        {status === "PENDING" && "Verification in Progress"}
        {status === "REJECTED" && "Registration Rejected"}
        {status === "BLOCKED" && "Account Blocked"}
      </h2>

      <p className="auth-subtitle">
        {status === "PENDING" &&
          "Our team is reviewing your details. This usually takes 24 hours."}
        {status === "REJECTED" &&
          "Your submission was rejected. Please review and resubmit."}
        {status === "BLOCKED" &&
          "Your account has been blocked due to policy violations."}
      </p>

      {status === "REJECTED" && (
        <button className="auth-primary-btn">
          Edit & Resubmit
        </button>
      )}
    </div>
  );
};

export default RegistrationStatusPage;
