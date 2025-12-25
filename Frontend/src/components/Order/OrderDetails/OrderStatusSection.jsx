const order = {
  orderId: "ORD-982341",
  createdAt: "2025-01-18T19:42:00",
  restaurant: {
    name: "Spice Hub – North Indian Kitchen",
  },
  status: "PREPARING",
  steps: [
    { key: "PLACED", label: "Order Placed" },
    { key: "ACCEPTED", label: "Accepted" },
    { key: "PREPARING", label: "Preparing" },
    { key: "OUT_FOR_DELIVERY", label: "Out for delivery" },
    { key: "DELIVERED", label: "Delivered" },
  ],
};


const OrderStatusSection = () => {
  const currentIndex = order.steps.findIndex(
    step => step.key === order.status
  );

  const progressPercent =
    ((currentIndex + 1) / order.steps.length) * 100;

  return (
    <section className="order-status-section">
      <div className="order-status-header">
        <div>
          <h2 className="order-status-title">
            {order.restaurant.name}
          </h2>
          <p className="order-status-sub">
            Order ID: {order.orderId}
          </p>
        </div>

        <span className={`order-status-badge status-${order.status.toLowerCase()}`}>
          {order.status.replaceAll("_", " ")}
        </span>
      </div>


      <div className="order-status-step-info">
        Step {currentIndex + 1} of {order.steps.length}
      </div>


      <div className="order-status-progress-track">
        <div
          className="order-status-progress-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>


      <div className="order-status-steps">
        {order.steps.map((step, index) => (
          <div
            key={step.key}
            className={`order-status-step ${index <= currentIndex ? "step-active" : ""}`}
          >
            {step.label}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderStatusSection;
