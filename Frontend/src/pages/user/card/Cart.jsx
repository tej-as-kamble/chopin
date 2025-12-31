import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartAccordion from "@/components/user/Cart/CartAccordion";
import "@/components/user/Cart/cart.css";

const DUMMY_CARTS = [
  {
    id: "c1",
    restaurant: "Spice Hub",
    isOpen: true,
    items: [
      {
        id: "i1",
        name: "Paneer Butter Masala",
        price: 220,
        qty: 1,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
      },
      {
        id: "i2",
        name: "Butter Naan",
        price: 40,
        qty: 3,
        image: "https://images.unsplash.com/photo-1626074353765-5173ed6c89a8"
      },
      {
        id: "i3",
        name: "Jeera Rice",
        price: 160,
        qty: 1,
        image: "https://images.unsplash.com/photo-1600628422019-7c98f38a3b7f"
      }
    ]
  },

  {
    id: "c2",
    restaurant: "Pizza World",
    isOpen: true,
    items: [
      {
        id: "i4",
        name: "Margherita Pizza",
        price: 299,
        qty: 1,
        image: "https://images.unsplash.com/photo-1601924582975-4cc06edc3d39"
      },
      {
        id: "i5",
        name: "Farmhouse Pizza",
        price: 399,
        qty: 1,
        image: "https://images.unsplash.com/photo-1548365328-9f547fb09552"
      },
      {
        id: "i6",
        name: "Garlic Bread",
        price: 149,
        qty: 2,
        image: "https://images.unsplash.com/photo-1604909052743-94e838986d24"
      }
    ]
  },

  {
    id: "c3",
    restaurant: "Biryani Junction",
    isOpen: true,
    items: [
      {
        id: "i7",
        name: "Chicken Dum Biryani",
        price: 320,
        qty: 1,
        image: "https://images.unsplash.com/photo-1600628422019-7c98f38a3b7f"
      },
      {
        id: "i8",
        name: "Chicken 65",
        price: 240,
        qty: 1,
        image: "https://images.unsplash.com/photo-1628294896344-0adbb5a0cf0b"
      },
      {
        id: "i9",
        name: "Raita",
        price: 40,
        qty: 2,
        image: "https://images.unsplash.com/photo-1589308078055-918d0c4b3c88"
      }
    ]
  },

  {
    id: "c4",
    restaurant: "Burger Town",
    isOpen: true,
    items: [
      {
        id: "i10",
        name: "Classic Veg Burger",
        price: 149,
        qty: 2,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
      },
      {
        id: "i11",
        name: "French Fries",
        price: 99,
        qty: 1,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add"
      },
      {
        id: "i12",
        name: "Cold Coffee",
        price: 120,
        qty: 1,
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
      }
    ]
  }
];


const Cart = () => {
  const [carts, setCarts] = useState(DUMMY_CARTS);
  const navigate = useNavigate();

  const updateCartItems = (cartId, items) => {
    setCarts(prev =>
      prev.map(c => (c.id === cartId ? { ...c, items } : c))
    );
  };

  const deleteCart = (cartId) => {
    setCarts(prev => prev.filter(c => c.id !== cartId));
  };

  const placeOrder = (cartId) => {
    deleteCart(cartId);
    navigate(`/order/place/${cartId}`);
  };

  return (
    <div className="cart-page">
      <h2>Your Carts</h2>

      {carts.length === 0 && (
        <div className="empty-cart">Your cart is empty</div>
      )}

      {carts.map(cart => (
        <CartAccordion
          key={cart.id}
          cart={cart}
          onUpdateItems={updateCartItems}
          onDeleteCart={deleteCart}
          onPlaceOrder={placeOrder}
        />
      ))}
    </div>
  );
};

export default Cart;