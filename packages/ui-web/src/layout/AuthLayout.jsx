import "./AuthLayout.css";
import { Outlet } from "react-router-dom";
import img9 from "../assets/img9.png";

const AuthLayout = ({ role }) => {
    const tagLine = {
        customer: "Good food is always a good idea",
        delivery: "Right place, right time, every time",
        restaurant: "Great kitchens deserve great reach",
        manager: "Smooth operations make great experiences",
        admin: "Strong systems build scalable platforms"
    }


    return (
        <div className="auth-wrapper">
            <div className="auth-layout">
                <div className={`auth-left ${role}`}>
                    <div className="auth-img-wrapper">
                        <img src={img9} className="auth-front-img" />
                    </div>

                    <h2>Welcome to Chopin</h2>
                    <p>{tagLine[role]}</p>
                </div>

                <div className="auth-right">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
