import "./ItemCard.css";

const ItemCard = ({ item, onClick }) => {
  return (
    <div className="rm-item-card" onClick={onClick}>
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>₹{item.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
