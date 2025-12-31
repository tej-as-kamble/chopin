import { useEffect, useState } from "react";
import "./Main3.css";
import { FaStore, FaMotorcycle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Main3 = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="joinus">
      <h2>Join Chopin</h2>
      <p className="joinus-sub">
        Build with us — grow your business or earn on your own schedule
      </p>

      <div className="joinus-cards">
        {loading ? (
          <>
            <div className="joinus-skeleton"></div>
            <div className="joinus-skeleton"></div>
          </>
        ) : (
          <>
            <div className="joinus-card">
              <div className="joinus-icon-wrap">
                <FaStore />
              </div>
              <div className="joinus-content">
                <h3>Restaurant Partner</h3>
                <p>
                  Reach more customers, increase orders, and manage everything
                  from one dashboard.
                </p>
                <Link to="/partner/restaurant"><button>Register Restaurant</button></Link>
              </div>
            </div>

            <div className="joinus-card">
              <div className="joinus-icon-wrap">
                <FaMotorcycle />
              </div>
              <div className="joinus-content">
                <h3>Delivery Partner</h3>
                <p>
                  Deliver when you want, earn steadily, and work independently according to you.
                </p>
                <Link to="/partner/delivery"><button>Start Delivering</button></Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Main3;
