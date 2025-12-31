import { useParams, useNavigate } from "react-router-dom";
import ITEM_DUMMY from "@/data/ITEM_DUMMY";
import "./ItemDetailsDrawer.css";

const ItemDetailsDrawer = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const item = ITEM_DUMMY.find((i) => i.id === itemId);
  if (!item) return null;

  return (
    <div className="rm-item-drawer">
      <div className="rm-item-drawer-header">
        <button onClick={() => navigate(-1)}>✕</button>
        <h3>{item.name}</h3>
      </div>

      <img src={item.image} />
      <p>{item.description}</p>
      <strong>₹{item.price}</strong>
    </div>
  );
};

export default ItemDetailsDrawer;
