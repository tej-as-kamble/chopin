import "./OtpInput.css";

const OtpInput = () => {
  return (
    <div className="otp-wrapper">
      <label>Enter OTP</label>
      <div className="otp-boxes">
        {[...Array(6)].map((_, i) => (
          <input key={i} maxLength="1" />
        ))}
      </div>
      <span className="otp-hint">Didn’t receive OTP? Resend</span>
    </div>
  );
};

export default OtpInput;
