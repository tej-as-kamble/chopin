const RestaurantHeader = () => {
  const restaurant = {
    name: "Spice Hub",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    cuisines: ["Indian", "Chinese", "Tandoor"],
    rating: 4.4,
    time: 35,
    isOpen: true
  };

  return (
    <div
      className="rest-hero"
      style={{ backgroundImage: `url(${restaurant.image})` }}
    >
      <div className="rest-hero-overlay" />

      <div className="rest-hero-content">
        <h1>{restaurant.name}</h1>
        <p>{restaurant.cuisines.join(" • ")}</p>

        <div className="rest-hero-meta">
          <span>⭐ {restaurant.rating}</span>
          <span>{restaurant.time} mins</span>
          <span>{restaurant.isOpen ? "Open" : "Closed"}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
