import { useState } from "react";
import OtpInput from "@/components/auth/OtpInput";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import EmailInput from "@/components/auth/EmailInput";

const LoginPage = () => {
    const [step, setStep] = useState("CONTACT");
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/dashboard");
    }

    return (
        <div className="auth-page">
            <h2 className="auth-title">Manager Login</h2>
            <p className="auth-subtitle">
                Login using OTP sent to your phone or email
            </p>

            {step === "CONTACT" && (
                <>
                    <EmailInput />
                    <button
                        className="auth-primary-btn"
                        onClick={() => setStep("OTP")}
                    >
                        Send OTP
                    </button>
                </>
            )}

            {step === "OTP" && (
                <>
                    <OtpInput />
                    <button className="auth-primary-btn" onClick={() => handleLogin()}>
                        Verify & Login
                    </button>
                    <button className="auth-secondary-btn" onClick={() => setStep("CONTACT")}>
                        Change Email
                    </button>
                </>
            )}
        </div>
    );
};

export default LoginPage;
