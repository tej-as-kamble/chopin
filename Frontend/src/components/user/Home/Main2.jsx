import React, { useEffect, useState } from "react";
import "./Main2.css"
import img5 from '@/assets/img5.jpg'
import img6 from '@/assets/img6.jpg'
import img7 from '@/assets/img7.jpg'
import img8 from '@/assets/img8.jpg'

const Main2 = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(t);
    }, []);


    return (
        <section className="main2">
            {loading ? (
                <>
                    {[1, 2, 3].map((_, i) => (
                        <div className="main2-card" key={i}>
                            <div className="img-wrapper">
                                <div className="skeleton-box"></div>
                            </div>

                            <div className="skeleton-line title"></div>
                            <div className="skeleton-line text"></div>

                            <div className="dots">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                        </div>
                    ))}
                </>
            ) : (
                <>
                    <div className="main2-card">
                        <div className="img-wrapper">
                            <img src={img8} className="bg-img" />
                            <img src={img5} className="front-img" />
                        </div>
                        <h3>Choose Food</h3>
                        <p>Browse restaurants and select your favorite meals.</p>
                        <div className="dots">
                            <span className="dot active"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>


                    <div className="main2-card">
                        <div className="img-wrapper">
                            <img src={img8} className="bg-img" />
                            <img src={img6} className="front-img" />
                        </div>
                        <h3>Place Order</h3>
                        <p>Order easily with secure and fast checkout.</p>
                        <div className="dots">
                            <span className="dot"></span>
                            <span className="dot active"></span>
                            <span className="dot"></span>
                        </div>
                    </div>


                    <div className="main2-card">
                        <div className="img-wrapper">
                            <img src={img8} className="bg-img" />
                            <img src={img7} className="front-img" />
                        </div>
                        <h3>Fast Delivery</h3>
                        <p>Get your food delivered hot and fresh.</p>
                        <div className="dots">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot active"></span>
                        </div>
                    </div>
                </>
            )}
        </section>
    )
}

export default Main2
