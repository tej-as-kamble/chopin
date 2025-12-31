import { Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom";
import ITEM_DUMMY from "@/data/ITEM_DUMMY";
import ItemCard from "./ItemCard";
import "./ItemsGrid.css";

const ItemsGrid = () => {
  const { category } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const query = params.get("q");

  const items = ITEM_DUMMY.filter((item) => {
    if (query)
      return item.name.toLowerCase().includes(query.toLowerCase());
    return item.category === category;
  });

  return (
    <>
      <div className="rm-items-grid">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            onClick={() =>
              navigate(
                `/partner/restaurant/menu/${item.category}/${item.id}`
              )
            }
          />
        ))}
      </div>
      
      <Outlet />
    </>
  );
};

export default ItemsGrid;
