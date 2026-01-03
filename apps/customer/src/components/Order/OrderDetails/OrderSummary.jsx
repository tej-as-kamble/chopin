import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DUMMY_ORDER_SUMMARY = {
  restaurantName: "Spice Hub – North Indian & Chinese",
  itemCount: 4,
  items: [
    {
      id: "i1",
      name: "Paneer Butter Masala",
      quantity: 1,
      price: 220,
    },
    {
      id: "i2",
      name: "Butter Naan",
      quantity: 3,
      price: 40,
    },
    {
      id: "i3",
      name: "Veg Fried Rice",
      quantity: 1,
      price: 180,
    },
    {
      id: "i4",
      name: "Manchurian Gravy",
      quantity: 1,
      price: 160,
    },
  ],
};

const OrderSummary = () => {
  const [expanded, setExpanded] = useState(false);

  const totalAmount = DUMMY_ORDER_SUMMARY.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="order-details-card">
      <div
        className="order-summary-header"
        onClick={() => setExpanded(prev => !prev)}
      >
        <div>
          <h3 className="order-summary-title">
            {DUMMY_ORDER_SUMMARY.restaurantName}
          </h3>
          <p className="order-summary-subtext">
            {DUMMY_ORDER_SUMMARY.itemCount} items • ₹{totalAmount}
          </p>
        </div>

        <span
          className={`order-summary-arrow ${expanded ? "expanded" : ""
            }`}
        >
          <MdKeyboardArrowDown />
        </span>
      </div>


      {expanded && (
        <div className="order-summary-body">
          {DUMMY_ORDER_SUMMARY.items.map(item => (
            <div key={item.id} className="order-summary-item">
              <span className="order-summary-item-name">
                {item.name} × {item.quantity}
              </span>
              <span className="order-summary-item-price">
                ₹{item.price * item.quantity}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default OrderSummary;
