import "./Input.css";

const EmailInput = () => {
    return (
        <div className="auth-input-group">
            <label>Email Address</label>
            <input
                type="email"
                placeholder="Enter email address"
            />
        </div>
    );
};

export default EmailInput;