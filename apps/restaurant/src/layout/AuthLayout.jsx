import { Outlet, Link } from "react-router-dom";
import "./AuthLayout.css";
import img9 from "@/assets/img9.png";
import { IoMdArrowRoundBack } from "react-icons/io";

const AuthLayout = ({ role }) => {
    return (
        <div className="auth-wrapper">
            <div className="auth-layout">
                <div className={`auth-left ${role == "user" ? "user" : "all"}`}>
                    <div className="auth-img-wrapper">
                        <img src={img9} className="auth-front-img" />
                    </div>

                    <h2>Welcome to Chopin</h2>
                    <p>Good food is always a good idea.</p>
                    <div className="auth-home">
                        <Link to={`/`} className="auth-home-link">
                            <IoMdArrowRoundBack /> <span>Home</span>
                        </Link>
                    </div>
                </div>

                <div className="auth-right">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
