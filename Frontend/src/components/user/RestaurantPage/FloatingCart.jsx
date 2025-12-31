import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import "./FloatingCart.css";
import { IoClose } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FloatingCart = ({ items, onRemove }) => {
  const ref = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (!items || items.length === 0) return null;

  const scroll = (dir) => {
    ref.current.scrollBy({
      left: dir === "left" ? -60 : 60,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-cart">
      <div className="floating-cart-btn">
        <Link to="/cart" className="floating-go-cart">
          View Cart
        </Link>
        <Link to="/order/place" className="floating-go-order">
          Order Now
        </Link>
      </div>

      <div className="floating-cart-items" ref={ref}>
        {loading
          ? Array.from({ length: 9 }).map((_, i) => (
            <div className="cart-item skeleton-item" key={i}></div>
          ))
          : items.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.img} alt={item.name} />
              <IoClose
                className="remove-icon"
                onClick={() => onRemove(item.id)}
              />
            </div>
          ))}
      </div>

      <div className="floating-cart-arrows">
        <button onClick={() => scroll("right")}>
          <FaArrowRight />
        </button>
        <button onClick={() => scroll("left")}>
          <FaArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default FloatingCart;
