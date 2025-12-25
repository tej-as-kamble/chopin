import { useRef, useState, useEffect } from "react";
import "./FoodCategories.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import img1 from '@/assets/img1.jpg'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpg'
import img4 from '@/assets/img4.jpg'
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Pizza", img: img1 },
  { name: "Biryani", img: img2 },
  { name: "Burger", img: img3 },
  { name: "Chinese", img: img4 },
  { name: "Desserts", img: img3 },
  { name: "Pizza", img: img2 },
  { name: "Biryani", img: img4 },
  { name: "Burger", img: img1 },
  { name: "Chinese", img: img4 },
  { name: "Desserts", img: img2 },
  { name: "Pizza", img: img1 },
  { name: "Biryani", img: img3 },
  { name: "Burger", img: img1 },
  { name: "Chinese", img: img2 },
  { name: "Desserts", img: img1 },
];


const FoodCategories = () => {
  const ref = useRef(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const scroll = (dir) => {
    ref.current.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <section className="food-cat">
      <div className="food-cat-header">
        <h2>What’s on your mind?</h2>

        <div className="food-cat-arrows">
          <button onClick={() => scroll("left")}>
            <FaArrowLeft />
          </button>
          <button onClick={() => scroll("right")}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="food-cat-list" ref={ref}>
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
            <div className="food-cat-item skeleton-cat" key={i}>
              <div className="skeleton-circle"></div>
              <div className="skeleton-text"></div>
            </div>
          ))
          : categories.map((cat, i) => (
            <div className="food-cat-item" key={i}>
              <img src={cat.img} alt={cat.name} onClick={() => navigate(`/search?q=${cat.name.toLowerCase()}`)} />
              <p>{cat.name}</p>
            </div>
          ))}
      </div>

    </section>
  );
};

export default FoodCategories;

