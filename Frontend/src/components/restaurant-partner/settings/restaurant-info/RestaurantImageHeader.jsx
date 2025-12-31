const RestaurantImageHeader = ({ image, name, outlet }) => {
  return (
    <div className="ri-image-wrap">
      <img src={image} alt="Restaurant" />
      <div className="ri-image-overlay">
        <h2>{name}</h2>
        <p>{outlet}</p>
      </div>
    </div>
  );
};

export default RestaurantImageHeader;
