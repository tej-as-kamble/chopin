import { useRef } from "react";
import "./OtpInput.css";

const OtpInput = ({ length = 6, onChange }) => {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    e.target.value = value;

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }

    collectOtp();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text").slice(0, length);
    data.split("").forEach((char, i) => {
      inputsRef.current[i].value = char;
    });
    collectOtp();
  };

  const collectOtp = () => {
    const otp = inputsRef.current.map((i) => i.value).join("");
    onChange && onChange(otp);
  };

  return (
    <div className="otp-container" onPaste={handlePaste}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength="1"
          className="otp-box"
          ref={(el) => (inputsRef.current[i] = el)}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
