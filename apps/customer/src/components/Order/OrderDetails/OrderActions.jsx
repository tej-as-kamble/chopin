import { useNavigate } from "react-router-dom";

const DUMMY_ORDER_ACTION_DATA = {
  orderId: "ORD789456",
  status: "OUT_FOR_DELIVERY",
  canCancel: false,
};

const OrderActions = () => {
  const { status, canCancel } = DUMMY_ORDER_ACTION_DATA;
  const navigate = useNavigate();

  const renderPrimaryAction = () => {
    if (status === "OUT_FOR_DELIVERY") {
      return (
        <button className="order-actions-primary-btn">
          Track Delivery
        </button>
      );
    }

    if (status === "PREPARING") {
      return (
        <button className="order-actions-primary-btn">
          Cancel Order
        </button>
      );
    }

    if (status === "DELIVERED") {
      return (
        <button className="order-actions-primary-btn">
          Rate Your Order
        </button>
      );
    }

    return null;
  };

  return (
    <section className="order-actions-section">
      <div className="order-actions-primary">
        {renderPrimaryAction()}
      </div>


      <div className="order-actions-secondary">
        {canCancel && (
          <button className="order-actions-secondary-btn danger">
            Cancel Order
          </button>
        )}

        <button className="order-actions-secondary-btn">
          View Invoice
        </button>

        <button
          className="order-actions-secondary-btn"
          onClick={() => navigate("/help")}
        >
          Help
        </button>
      </div>
    </section>
  );
};

export default OrderActions;
