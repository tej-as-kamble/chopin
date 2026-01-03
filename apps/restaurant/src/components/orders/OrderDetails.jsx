import "./OrderDetails.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { ORDERS_DUMMY } from "@/data/ORDERS_DUMMY";

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const order = ORDERS_DUMMY.find(o => o.id === orderId);

  if (!order) {
    return <div className="rd-order-details empty">Order not found</div>;
  }

  return (
    <>
      <div
        className="rd-order-details-back-btn"
        onClick={() => navigate(-1)}
      >
        <IoChevronBackOutline />
        <p>Back</p>
      </div>

      <div className="rd-order-details">
        <h3 className="rd-order-details-title">{order.id}</h3>

        <div className="rd-order-details-section">
          <strong>Customer:</strong> {order.customer}
          <br />
          <strong>Phone:</strong> {order.phone}
        </div>

        <div className="rd-order-details-section">
          <strong>Delivery Address:</strong>
          <div>{order.address}</div>
        </div>

        <div className="rd-order-details-section">
          <strong>Items:</strong>
          <ul> {order.items.map((item, idx) =>
            (<li key={idx}> {item.qty} × {item.name} — ₹{item.price} </li>))}
          </ul>
        </div>
        <div className="rd-order-details-section">
          <div>Subtotal: ₹{order.subtotal}</div>
          <div>Tax: ₹{order.tax}</div>
          <div>Delivery Fee: ₹{order.deliveryFee}</div>
          <strong>Total: ₹{order.total}</strong>
        </div>

        {order.instructions && (
          <div className="rd-order-details-section">
            <strong>Instructions:</strong>
            {order.instructions} </div>
        )}

        <div className="rd-order-details-section">
          <strong>Payment:</strong> {order.paymentMode}
        </div>

        <div className="rd-order-details-actions">
          {order.status === "new" && (
            <button className="rd-order-btn primary">Accept</button>
          )}
          {order.status !== "completed" && (
            <button className="rd-order-btn secondary">Reject</button>
          )}
          {order.status && (
            <button className="rd-order-btn secondary">Move To Next Step</button>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
