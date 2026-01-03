import { CiCircleRemove } from "react-icons/ci";

const CartItems = ({ items, onChange }) => {

    const updateQty = (id, delta) => {
        const updated = items.map(i =>
            i.id === id
                ? { ...i, qty: Math.max(1, i.qty + delta) }
                : i
        );
        onChange(updated);
    };

    const removeItem = (id) => {
        onChange(items.filter(i => i.id !== id));
    };

    return (
        <div className="cart-items">
            {items.map(item => (
                <div className="cart-item">
                    <div className="item-left">
                        <img
                            src={item.image}
                            onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?w=300&h=300&fit=crop")}
                            alt={item.name}
                            className="item-img"
                        />

                        <div className="item-info">
                            <span className="item-name">{item.name}</span>
                            <span className="price">₹{item.price * item.qty}</span>
                        </div>
                    </div>

                    <div className="item-actions">
                        <div className="qty-control">
                            <button className="qty-control-btn" onClick={() => updateQty(item.id, -1)}>-</button>
                            <span className="qty">{item.qty}</span>
                            <button className="qty-control-btn" onClick={() => updateQty(item.id, 1)}>+</button>
                        </div>

                        <button
                            className="remove-btn"
                            onClick={() => removeItem(item.id)}
                        >
                            <CiCircleRemove />
                        </button>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default CartItems;
