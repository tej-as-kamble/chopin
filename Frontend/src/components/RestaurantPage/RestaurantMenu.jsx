import { useState } from "react";

const menuData = {
    Starters: [
        {
            id: 1,
            name: "Paneer Tikka",
            price: 220,
            image:
                "https://images.unsplash.com/photo-1628294896516-344152572ee8",
            available: true
        },
        {
            id: 2,
            name: "Veg Spring Roll",
            price: 180,
            image:
                "https://images.unsplash.com/photo-1604909052743-94e838986d24",
            available: true
        },
        {
            id: 7,
            name: "Paneer Tikka",
            price: 220,
            image:
                "https://images.unsplash.com/photo-1628294896516-344152572ee8",
            available: true
        },
        {
            id: 8,
            name: "Veg Spring Roll",
            price: 180,
            image:
                "https://images.unsplash.com/photo-1604909052743-94e838986d24",
            available: true
        },
        {
            id: 9,
            name: "Paneer Tikka",
            price: 220,
            image:
                "https://images.unsplash.com/photo-1628294896516-344152572ee8",
            available: true
        },
        {
            id: 10,
            name: "Veg Spring Roll",
            price: 180,
            image:
                "https://images.unsplash.com/photo-1604909052743-94e838986d24",
            available: true
        }
    ],
    MainCourse: [
        {
            id: 3,
            name: "Butter Chicken",
            price: 320,
            image:
                "https://images.unsplash.com/photo-1604909052743-94e838986d24",
            available: false
        },
        {
            id: 4,
            name: "Paneer Butter Masala",
            price: 280,
            image:
                "https://images.unsplash.com/photo-1628294896516-344152572ee8",
            available: true
        },
        {
            id: 11,
            name: "Butter Chicken",
            price: 320,
            image:
                "https://images.unsplash.com/photo-1604909052743-94e838986d24",
            available: false
        },
        {
            id: 12,
            name: "Paneer Butter Masala",
            price: 280,
            image:
                "https://images.unsplash.com/photo-1628294896516-344152572ee8",
            available: true
        },
        {
            id: 13,
            name: "Butter Chicken",
            price: 320,
            image:
                "https://images.unsplash.com/photo-1604909052743-94e838986d24",
            available: false
        },
        {
            id: 14,
            name: "Paneer Butter Masala",
            price: 280,
            image:
                "https://images.unsplash.com/photo-1628294896516-344152572ee8",
            available: true
        },
        {
            id: 15,
            name: "Butter Chicken",
            price: 320,
            image:
                "https://images.unsplash.com/photo-1604909052743-94e838986d24",
            available: false
        },
        {
            id: 16,
            name: "Paneer Butter Masala",
            price: 280,
            image:
                "https://images.unsplash.com/photo-1628294896516-344152572ee8",
            available: true
        }
    ],
    Beverages: [
        {
            id: 5,
            name: "Cold Coffee",
            price: 120,
            image:
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
            available: true
        },
        {
            id: 6,
            name: "Masala Chai",
            price: 60,
            image:
                "https://images.unsplash.com/photo-1544787219-7f47ccb76574",
            available: true
        }
    ]
};

const RestaurantMenu = () => {
    const categories = Object.keys(menuData);
    const [activeCat, setActiveCat] = useState(categories[0]);
    const [qty, setQty] = useState({});

    const inc = (id) =>
        setQty((p) => ({ ...p, [id]: (p[id] || 0) + 1 }));

    const dec = (id) =>
        setQty((p) => ({ ...p, [id]: Math.max((p[id] || 0) - 1, 0) }));

    return (
        <div className="rest-menu">
            <div className="rest-categories">
                {categories.map((c) => (
                    <button
                        key={c}
                        className={c === activeCat ? "active" : ""}
                        onClick={() => setActiveCat(c)}
                    >
                        {c}
                    </button>
                ))}
            </div>

            <div className="rest-items">
                <div className="rest-item-heading-and-action">
                    <h2>{activeCat}</h2>
                    <div className="restaurant-actions">
                        <select>
                            <option>Sort</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="food-grid">
                    {menuData[activeCat].map((item) => (
                        <div
                            key={item.id}
                            className={`food-card ${!item.available ? "food-disabled" : ""
                                }`}
                        >
                            <img src={item.image} />

                            <div className="food-info">
                                <h4>{item.name}</h4>
                                <div className="food-bottom">
                                    <span>₹{item.price}</span>

                                    {qty[item.id] > 0 ? (
                                        <div className="qty-box">
                                            <button onClick={() => dec(item.id)}>-</button>
                                            <span>{qty[item.id]}</span>
                                            <button onClick={() => inc(item.id)}>+</button>
                                        </div>
                                    ) : (
                                        <button
                                            disabled={!item.available}
                                            onClick={() => inc(item.id)}
                                        >
                                            ADD
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;
