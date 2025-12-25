import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div
            className="restaurant-card"
            onClick={() => navigate(`/restaurant/${data.id}`)}
        >

            <div className="restaurant-img">
                <img
                    src={data.image || "https://via.placeholder.com/400x250"}
                    alt={data.name}
                />
                {data.isOpen && <span className="open-badge">OPEN</span>}
            </div>


            <div className="restaurant-body">
                <div className="restaurant-header">
                    <h4>{data.name}</h4>
                    <span className="rating">{data.rating} ★</span>
                </div>

                <p className="cuisine">
                    {data.cuisine?.join(", ") || "Multi-cuisine"}
                </p>

                <div className="searched-restaurant-footer">
                    <span>{data.deliveryTime || "30 mins"}</span>
                    <span>₹{data.costForTwo || "300"} for two</span>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
