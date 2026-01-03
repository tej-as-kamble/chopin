import "./OrdersList.css";
import OrderCard from "./OrderCard";
import { useNavigate, useParams } from "react-router-dom";

const OrdersList = ({ orders }) => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  if (!orders.length) {
    return (
      <div className="rd-orders-empty">
        No orders in this status
      </div>
    );
  }

  return (
    <div className="rd-orders-list">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          isActive={orderId === order.id}
          onClick={() => navigate(`${order.id}`)}
        />
      ))}
    </div>
  );
};

export default OrdersList;
