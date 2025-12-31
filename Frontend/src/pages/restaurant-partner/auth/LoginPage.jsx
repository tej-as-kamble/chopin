import { useState } from "react";
import PhoneInput from "@/components/restaurant-partner/auth/PhoneInput";
import OtpInput from "@/components/restaurant-partner/auth/OtpInput";
import "./LoginPage.css";

const LoginPage = () => {
    const [step, setStep] = useState("CONTACT");

    return (
        <div className="auth-page">
            <h2 className="auth-title">Restaurant Login</h2>
            <p className="auth-subtitle">
                Login using OTP sent to your phone or email
            </p>

            {step === "CONTACT" && (
                <>
                    <PhoneInput />
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
                    <button className="auth-primary-btn">
                        Verify & Login
                    </button>
                </>
            )}
        </div>
    );
};

export default LoginPage;
