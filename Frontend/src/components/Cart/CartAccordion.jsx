import { useState } from "react";
import CartItems from "./CartItems";
import CouponSection from "./CouponSection";
import BillSummary from "./BillSummary";
import { MdDelete, MdKeyboardArrowDown } from "react-icons/md";

const CartAccordion = ({ cart, onUpdateItems, onDeleteCart, onPlaceOrder }) => {
    const [open, setOpen] = useState(false);
    const [coupon, setCoupon] = useState(null);

    const subtotal = cart.items.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <div className="cart-accordion">
            <div className="cart-header" onClick={() => setOpen(!open)}>
                <div>
                    <h4>{cart.restaurant}</h4>
                    <span>{cart.items.length} items • ₹{subtotal}</span>
                </div>

                <div className="cart-actions">
                    <button
                        className="delete-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDeleteCart(cart.id);
                        }}
                    >
                        <MdDelete size={20} />
                    </button>
                    <span className={`arrow ${open ? "open" : ""}`}>
                        <MdKeyboardArrowDown size={26} />
                    </span>
                </div>
            </div>

            {open && (
                <div className="cart-body">
                    <CartItems
                        items={cart.items}
                        onChange={(items) => onUpdateItems(cart.id, items)}
                    />

                    <div className="cart-payment">
                        <CouponSection
                            subtotal={subtotal}
                            applied={coupon}
                            setApplied={setCoupon}
                        />

                        <BillSummary
                            subtotal={subtotal}
                            coupon={coupon}
                            onPlaceOrder={() => onPlaceOrder(cart.id)}
                            disabled={!cart.isOpen}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartAccordion;
