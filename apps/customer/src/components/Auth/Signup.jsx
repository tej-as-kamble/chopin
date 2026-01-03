import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import OtpInput from "./OtpInput";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const sendOtp = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Signup successful");
    }, 1200);
  };

  return (
    <div className="signup-right">
      {step === 1 && (
        <form className="signup-form" onSubmit={sendOtp}>
          <h2>Create Account</h2>

          <input type="text" placeholder="Full Name" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" disabled={loading}>
            {loading ? "Sending OTP..." : "Continue"}
          </button>

          <div className="signup-links">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      )}

      {step === 2 && (
        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Verify Email</h2>
          <p className="otp-text">Enter the OTP sent to your email</p>

          <OtpInput length={6} />

          <button type="submit" disabled={loading}>
            {loading ? "Verifying..." : "Verify & Sign Up"}
          </button>

          <div className="signup-links">
            <span onClick={() => setStep(1)}>Change details</span>
          </div>
        </form>
      )}
    </div>
  );
};

export default Signup;
