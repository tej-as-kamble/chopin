import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RestaurantList.css";

const data = [
  {
    id: 1,
    name: "Pizza Hut",
    rating: "4.2",
    time: "30–35 mins",
    offer: "50% OFF",
    cuisines: "Pizzas",
    location: "Emporio Mall",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/f41d7847-1d5e-4f82-af27-02143ca63e1d_912348.JPG",
  },
  {
    id: 2,
    name: "Domino's Pizza",
    rating: "4.3",
    time: "20–25 mins",
    offer: "50% OFF",
    cuisines: "Pizzas, Italian, Desserts",
    location: "Dhaiya",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/4af115ac-0656-4123-b719-32f18c1d2e12_447223.JPG",
  },
  {
    id: 3,
    name: "Burger King",
    rating: "4.4",
    time: "20–25 mins",
    offer: "50% OFF",
    cuisines: "Burgers, American",
    location: "Dhanbad",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/5b6a7107-a1b6-4645-91d9-7754a0a95673_717990.jpg",
  },
  {
    id: 4,
    name: "Kaveri's Restaurant",
    rating: "4.2",
    time: "25–30 mins",
    offer: "50% OFF",
    cuisines: "Biryani, North Indian",
    location: "Dhanbad Locality",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hawe8breczghxnwwwmwa",
  },
  {
    id: 5,
    name: "Pizza Hut",
    rating: "4.2",
    time: "30–35 mins",
    offer: "50% OFF",
    cuisines: "Pizzas",
    location: "Emporio Mall",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/f41d7847-1d5e-4f82-af27-02143ca63e1d_912348.JPG",
  },
  {
    id: 6,
    name: "Domino's Pizza",
    rating: "4.3",
    time: "20–25 mins",
    offer: "50% OFF",
    cuisines: "Pizzas, Italian, Desserts",
    location: "Dhaiya",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/4af115ac-0656-4123-b719-32f18c1d2e12_447223.JPG",
  },
  {
    id: 7,
    name: "Burger King",
    rating: "4.4",
    time: "20–25 mins",
    offer: "50% OFF",
    cuisines: "Burgers, American",
    location: "Dhanbad",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/5b6a7107-a1b6-4645-91d9-7754a0a95673_717990.jpg",
  },
  {
    id: 8,
    name: "Kaveri's Restaurant",
    rating: "4.2",
    time: "25–30 mins",
    offer: "50% OFF",
    cuisines: "Biryani, North Indian",
    location: "Dhanbad Locality",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hawe8breczghxnwwwmwa",
  },
  {
    id: 9,
    name: "Kaveri's Restaurant",
    rating: "4.2",
    time: "25–30 mins",
    offer: "50% OFF",
    cuisines: "Biryani, North Indian",
    location: "Dhanbad Locality",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hawe8breczghxnwwwmwa",
  },
];

const RestaurantList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setList(data);
      setLoading(false);
    }, 1200);
  }, []);


  return (
    <section className="rest">
      <div className="rest-header">
        <h2>Restaurants with online food delivery in Dhanbad</h2>
        <select>
          <option>Sort By</option>
          <option>Rating</option>
          <option>Delivery Time</option>
        </select>
      </div>

      <div className="rest-grid">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
            <div className="rest-card skeleton" key={i}>
              <div className="img-wrap skeleton-box"></div>
              <div className="skeleton-line title"></div>
              <div className="skeleton-line meta"></div>
              <div className="skeleton-line small"></div>
            </div>
          ))
          : list.map((r) => (
            <div
              className="rest-card"
              key={r.id}
              onClick={() => navigate(`/restaurant/${r.id}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="img-wrap">
                <img src={r.img} alt={r.name} />
                <span className="offer">{r.offer}</span>
              </div>

              <h3>{r.name}</h3>

              <div className="meta">
                <span className="rating">⭐ {r.rating}</span>
                <span>{r.time}</span>
              </div>

              <p className="cuisine">{r.cuisines}</p>
              <p className="loc">{r.location}</p>
            </div>
          ))
        }
      </div>

    </section>
  );
};

export default RestaurantList;
