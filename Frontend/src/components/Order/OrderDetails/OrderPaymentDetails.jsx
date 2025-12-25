import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DUMMY_PAYMENT_DETAILS = {
  paymentMethod: "Razorpay (UPI)",
  transactionId: "TXN983746283",
  status: "PAID",
  breakdown: {
    itemTotal: 620,
    deliveryFee: 35,
    platformFee: 10,
    gst: 32,
    restaurantDiscount: -50,
    couponDiscount: -40,
    totalPaid: 607,
  },
  refund: {
    eligible: false,
    amount: 0,
    status: null, // INITIATED | COMPLETED
  },
};

const OrderPaymentDetails = () => {
  const [expanded, setExpanded] = useState(false);

  const { breakdown } = DUMMY_PAYMENT_DETAILS;

  return (
    <section className="order-pay-section">
      <div
        className="order-pay-header"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <h3 className="order-pay-title">Payment Details</h3>
          <p className="order-pay-sub">
            Paid via {DUMMY_PAYMENT_DETAILS.paymentMethod}
          </p>
        </div>

        <div className={`order-pay-arrow ${expanded ? "open" : ""}`}>
          <MdKeyboardArrowDown />
        </div>
      </div>


      {expanded && (
        <div className="order-pay-body">
          <div className="order-pay-row">
            <span>Item Total</span>
            <span>₹{breakdown.itemTotal}</span>
          </div>

          <div className="order-pay-row">
            <span>Delivery Fee</span>
            <span>₹{breakdown.deliveryFee}</span>
          </div>

          <div className="order-pay-row">
            <span>Platform Fee</span>
            <span>₹{breakdown.platformFee}</span>
          </div>

          <div className="order-pay-row">
            <span>GST & Taxes</span>
            <span>₹{breakdown.gst}</span>
          </div>

          <div className="order-pay-row discount">
            <span>Restaurant Discount</span>
            <span>₹{breakdown.restaurantDiscount}</span>
          </div>

          <div className="order-pay-row discount">
            <span>Coupon Discount</span>
            <span>₹{breakdown.couponDiscount}</span>
          </div>

          <div className="order-pay-divider" />

          <div className="order-pay-total">
            <span>Total Paid</span>
            <span>₹{breakdown.totalPaid}</span>
          </div>

          <div className="order-pay-meta">
            <p>
              <strong>Transaction ID:</strong>{" "}
              {DUMMY_PAYMENT_DETAILS.transactionId}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span className="order-pay-status success">
                {DUMMY_PAYMENT_DETAILS.status}
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default OrderPaymentDetails;
