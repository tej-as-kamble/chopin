import { useParams, useNavigate } from "react-router-dom";
import "@/components/Order/PlaceOrder.css"

const DUMMY_CART_DATA = {
  cartId: "c123",
  restaurant: {
    id: "r45",
    name: "Spice Hub – North Indian & Chinese",
  },
  items: [
    {
      id: "i1",
      name: "Paneer Butter Masala",
      qty: 1,
      price: 220,
    },
    {
      id: "i2",
      name: "Butter Naan",
      qty: 3,
      price: 40,
    },
    {
      id: "i3",
      name: "Veg Fried Rice",
      qty: 1,
      price: 180,
    },
  ],
  addressList: [
    {
      id: "a1",
      name: "Tejas Kamble",
      line1: "Hostel 9",
      line2: "IIT ISM Dhanbad",
      city: "Dhanbad",
      pincode: "826004",
      phone: "+91 90000 00000",
      isDefault: true,
    },
    {
      id: "a2",
      name: "Tejas Kamble",
      line1: "Home",
      line2: "Pune, Maharashtra",
      city: "Pune",
      pincode: "411001",
      phone: "+91 90000 00000",
      isDefault: false,
    },
  ],
  charges: {
    deliveryFee: 30,
    taxes: 25,
  },
};

const PlaceOrder = () => {
  const { cartId } = useParams();
  const navigate = useNavigate();

  const selectedAddress = DUMMY_CART_DATA.addressList.find(
    addr => addr.isDefault
  );

  const itemTotal = DUMMY_CART_DATA.items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  const grandTotal =
    itemTotal +
    DUMMY_CART_DATA.charges.deliveryFee +
    DUMMY_CART_DATA.charges.taxes;

  return (
    <div className="order-page">
      <section className="order-card">
        <h3 className="order-restaurant-name">
          {DUMMY_CART_DATA.restaurant.name}
        </h3>

        {DUMMY_CART_DATA.items.map(item => (
          <div key={item.id} className="order-item-row">
            <span>{item.name} × {item.qty}</span>
            <span>₹{item.qty * item.price}</span>
          </div>
        ))}
      </section>


      <section className="order-card">
        <div className="order-section-header">
          <h4>Delivery Address</h4>
          <button
            className="order-link-btn"
            onClick={() =>
              navigate(`/address?from=order&cartId=${cartId}`)
            }
          >
            Change
          </button>
        </div>

        <div className="order-address-box">
          <p className="order-address-name">{selectedAddress.name}</p>
          <p>{selectedAddress.line1}, {selectedAddress.line2}</p>
          <p>{selectedAddress.city} - {selectedAddress.pincode}</p>
          <p>{selectedAddress.phone}</p>
        </div>
      </section>


      <section className="order-card">
        <h4>Payment Method</h4>

        <label className="order-radio">
          <input type="radio" name="payment" defaultChecked />
          Cash on Delivery
        </label>

        <label className="order-radio">
          <input type="radio" name="payment" />
          Razorpay (UPI / Card)
        </label>
      </section>


      <section className="order-card">
        <h4>Delivery Instructions</h4>
        <textarea
          className="order-textarea"
          placeholder="Any instructions for restaurant or delivery partner?"
        />
      </section>


      <div className="order-footer">
        <div className="order-price-info">
          <span>Total Payable</span>
          <strong>₹{grandTotal}</strong>
        </div>

        <button
          className="order-place-btn"
          onClick={() => navigate("/order/ORD123")}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
