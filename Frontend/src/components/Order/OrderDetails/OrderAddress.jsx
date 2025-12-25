const DUMMY_ORDER_ADDRESS = {
  recipientName: "Tejas Kamble",
  phone: "+91 98200 65405",
  addressLine1: "Hostel 9, IIT (ISM)",
  addressLine2: "Police Line Road",
  city: "Dhanbad",
  state: "Jharkhand",
  pincode: "826004",
  landmark: "Near Main Gate",
};

const OrderAddress = () => {
  return (
    <section className="od-card">
      <h3 className="od-section-title">Delivery Address</h3>

      <div className="od-address-wrapper">
        <div className="od-address-icon">📍</div>

        <div className="od-address-content">
          <p className="od-address-name">
            {DUMMY_ORDER_ADDRESS.recipientName}
          </p>

          <p className="od-address-text">
            {DUMMY_ORDER_ADDRESS.addressLine1}, {DUMMY_ORDER_ADDRESS.addressLine2}
          </p>

          <p className="od-address-text">
            {DUMMY_ORDER_ADDRESS.city}, {DUMMY_ORDER_ADDRESS.state} –{" "}
            {DUMMY_ORDER_ADDRESS.pincode}
          </p>

          <p className="od-address-landmark">
            Landmark: {DUMMY_ORDER_ADDRESS.landmark}
          </p>

          <p className="od-address-phone">
            📞 {DUMMY_ORDER_ADDRESS.phone}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderAddress;
