import { useState } from "react";
import PhoneInput from "@/components/restaurant-partner/auth/PhoneInput";
import OtpInput from "@/components/restaurant-partner/auth/OtpInput";
import FormSection from "@/components/restaurant-partner/auth/FormSection";
import ImageUploadCard from "@/components/restaurant-partner/auth/ImageUploadCard";
import TermsCheckbox from "@/components/restaurant-partner/auth/TermsCheckbox";
import "./RegistrationPage.css";

const RegistrationPage = () => {
  const [step, setStep] = useState("CONTACT");

  return (
    <div className="registration-page">
      <h2 className="auth-title">Restaurant Registration</h2>
      <p className="auth-subtitle">
        Submit your details for verification
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
          <button
            className="auth-primary-btn"
            onClick={() => setStep("FORM")}
          >
            Verify OTP
          </button>
        </>
      )}

      {step === "FORM" && (
        <div className="reg-form">
          <FormSection title="Owner & Manager Details">
            <input placeholder="Owner Full Name" />
            <input placeholder="Manager Full Name" />
            <input placeholder="Manager Phone Number" />
            <input placeholder="Manager Email Address" />
          </FormSection>

          <FormSection title="Legal & Bank Details">
            <input placeholder="Restaurant Bank Details" />
            <input placeholder="FSSAI Number" />
            <input placeholder="GST Number" />
          </FormSection>

          <FormSection title="Restaurant Info">
            <input placeholder="Restaurant Name" />
            <input placeholder="Outlet Name" />
            <ImageUploadCard />
          </FormSection>

          <FormSection title="Food & Category">
            <select>
              <option>Restaurant Type</option>
              <option>Veg</option>
              <option>Non-Veg</option>
              <option>Both</option>
            </select>
            <select>
              <option>Restaurant Category</option>
            </select>
            <input placeholder="Cuisines (multi-select)" />
          </FormSection>

          <FormSection title="Location">
            <input placeholder="Location (map picker)" />
            <input placeholder="City" />
            <input placeholder="Area / Locality" />
            <input placeholder="Pincode" />
          </FormSection>

          <TermsCheckbox />

          <button className="auth-primary-btn">
            Submit for Verification
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationPage;
