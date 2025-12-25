import React, { useEffect, useState } from "react";
import "./Main1.css"
import { Link } from "react-router-dom"
import img1 from '@/assets/img1.jpg'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpg'
import img4 from '@/assets/img4.jpg'
import { IoArrowForwardCircleOutline } from "react-icons/io5"


const Main1 = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(t);
    }, []);

    return (
        <section className="main1">
            {loading ? (
                <>
                    <div className="main1-left">
                        <div className="skeleton-line h1"></div>
                        <div className="skeleton-line p"></div>

                        <div className="skeleton-btns">
                            <div className="skeleton-btn fill"></div>
                            <div className="skeleton-btn outline"></div>
                        </div>
                    </div>

                    <div className="main1-img">
                        <div className="skeleton-circle"></div>
                    </div>
                </>
            ) : (
                <>
                    <div className="main1-left">
                        <h1>India’s #1 food delivery app</h1>

                        <p className="main1-p">
                            Discover a wide range of cuisines, quick deliveries, and trusted
                            restaurants near you. Order in minutes and enjoy hot, fresh meals
                            anytime.
                        </p>

                        <div className="main1-btn">
                            <Link to="/user" className="main1-btn1">Order Now <IoArrowForwardCircleOutline className="btn1-arrow" /></Link>
                            <Link to="/contact-us" className="main1-btn2">Contact Us</Link>
                        </div>
                    </div>


                    <div className="main1-img">
                        <div className="red-square">
                            <img src={img4} className="center-img" />

                            <img src={img1} className="corner-img top-left" />
                            <img src={img2} className="corner-img top-right" />
                            <img src={img3} className="corner-img bottom-left" />
                            <img src={img4} className="corner-img bottom-right" />
                        </div>
                    </div>
                </>
            )}
        </section>

    );
};

export default Main1;
