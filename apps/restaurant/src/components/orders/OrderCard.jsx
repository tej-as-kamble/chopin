import "./OrderCard.css";

const OrderCard = ({ order, isActive, onClick }) => {
  return (
    <div
      className={`rd-order-card ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="rd-order-card-header">
        <span className="rd-order-id">{order.id}</span>
        <span className="rd-order-time">{order.timeAgo}</span>
      </div>

      <div className="rd-order-card-body">
        <div className="rd-order-customer">{order.customer}</div>
        <div className="rd-order-items">
          {order.items.map((i) => `${i.qty}× ${i.name}`).join(", ")}
        </div>
      </div>

      <div className="rd-order-card-footer">
        ₹{order.total} • {order.paymentMode}
      </div>
    </div>
  );
};

export default OrderCard;
