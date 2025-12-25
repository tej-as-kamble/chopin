const BillSummary = ({ subtotal, coupon, onPlaceOrder, disabled }) => {
    const discount = coupon ? coupon.value : 0;
    const total = subtotal - discount;

    return (
        <div className="bill-section">
            <h3>Payment</h3>
            <div className="bill-summary">
                <div><span>Subtotal</span><span>₹{subtotal}</span></div>
                <div><span>Discount</span><span>-₹{discount}</span></div>
                <div className="total"><span>Total</span><span>₹{total}</span></div>

                <button
                    className="order-btn"
                    onClick={onPlaceOrder}
                    disabled={disabled}
                >
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default BillSummary;
