import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "./OtpInput";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setOtpSent(true);
    }, 1200);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/reset-password");
    }, 1200);
  };

  return (
    <div className="forget-right">
      <form
        className="forget-form"
        onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}
      >
        <h2>Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          required
          disabled={otpSent}
        />

        {otpSent && (
          <>
            <p className="otp-text">Enter the OTP sent to your email</p>
            <OtpInput />
          </>
        )}

        <button type="submit" disabled={loading}>
          {loading
            ? otpSent
              ? "Verifying..."
              : "Sending OTP..."
            : otpSent
              ? "Verify OTP"
              : "Send OTP"}
        </button>

        <div className="forget-links">
          <Link to="/login">Back to Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
