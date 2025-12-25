import { useState } from "react";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom"

const Login = ({ setIsLoggedIn }) => {
    const [loading, setLoading] = useState(false);
    const navitage = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setIsLoggedIn(1);

        setTimeout(() => {
            setLoading(false);
            navitage('/user');
        }, 1000);
    };

    return (
        <>
            <div className="login-right">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>

                    <input
                        type="text"
                        placeholder="Email or Phone"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        required
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>

                    <div className="login-links">
                        <Link to="/forget-password">Forgot password?</Link>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
