import "./PhoneInput.css";

const PhoneInput = () => {
    return (
        <div className="auth-input-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter phone number" />
        </div>
    );
};

export default PhoneInput;
