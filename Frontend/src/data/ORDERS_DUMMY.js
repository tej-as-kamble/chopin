export const ORDERS_DUMMY = [
  {
    id: "ORD-1001",
    status: "rejected",
    customer: "Rahul Sharma",
    phone: "9876543210",
    items: [
      { name: "Paneer Butter Masala", qty: 1, price: 220 },
      { name: "Butter Naan", qty: 2, price: 40 }
    ],
    subtotal: 300,
    tax: 15,
    deliveryFee: 20,
    total: 335,
    paymentMode: "UPI",
    address: "Indiranagar, Bangalore",
    instructions: "Less spicy",
    orderedAt: "2025-01-02T18:30:00",
    timeAgo: "2 min ago"
  },
  {
    id: "ORD-1002",
    status: "preparing",
    customer: "Anjali Verma",
    phone: "9123456789",
    items: [
      { name: "Veg Biryani", qty: 1, price: 180 }
    ],
    subtotal: 180,
    tax: 9,
    deliveryFee: 20,
    total: 209,
    paymentMode: "COD",
    address: "Whitefield, Bangalore",
    instructions: "",
    orderedAt: "2025-01-02T18:20:00",
    timeAgo: "12 min ago"
  },
  {
    id: "ORD-1003",
    status: "ready",
    customer: "Suresh Kumar",
    phone: "9988776655",
    items: [
      { name: "Masala Dosa", qty: 2, price: 70 },
      { name: "Filter Coffee", qty: 1, price: 30 }
    ],
    subtotal: 170,
    tax: 8,
    deliveryFee: 20,
    total: 198,
    paymentMode: "UPI",
    address: "BTM Layout, Bangalore",
    instructions: "Extra chutney",
    orderedAt: "2025-01-02T18:05:00",
    timeAgo: "25 min ago"
  },
  {
    id: "ORD-1004",
    status: "completed",
    customer: "Neha Singh",
    phone: "9090909090",
    items: [
      { name: "Chicken Burger", qty: 1, price: 150 },
      { name: "French Fries", qty: 1, price: 90 }
    ],
    subtotal: 240,
    tax: 12,
    deliveryFee: 20,
    total: 272,
    paymentMode: "Card",
    address: "Koramangala, Bangalore",
    instructions: "",
    orderedAt: "2025-01-02T17:40:00",
    timeAgo: "50 min ago"
  },
  {
    id: "ORD-1005",
    status: "accepted",
    customer: "Naman Singh",
    phone: "909090934590",
    items: [
      { name: "Chicken Burger", qty: 1, price: 150 },
      { name: "French Fries", qty: 1, price: 90 }
    ],
    subtotal: 240,
    tax: 12,
    deliveryFee: 20,
    total: 272,
    paymentMode: "Card",
    address: "Koramangala, Bangalore",
    instructions: "",
    orderedAt: "2025-01-02T17:40:00",
    timeAgo: "50 min ago"
  },

  /* ---------- AUTO-GENERATED STYLE DATA ---------- */

  ...Array.from({ length: 46 }).map((_, i) => {
    const id = 1005 + i;
    const statuses = ["accepted", "preparing", "ready", "completed", "rejected"];
    const status = statuses[i % 4];

    return {
      id: `ORD-${id}`,
      status,
      customer: `Customer ${id}`,
      phone: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
      items: [
        { name: "Veg Thali", qty: 1, price: 160 },
        { name: "Sweet Lassi", qty: 1, price: 60 }
      ],
      subtotal: 220,
      tax: 11,
      deliveryFee: 20,
      total: 251,
      paymentMode: i % 2 === 0 ? "UPI" : "COD",
      address: "HSR Layout, Bangalore",
      instructions: i % 3 === 0 ? "No onions" : "",
      orderedAt: "2025-01-02T17:00:00",
      timeAgo: `${10 + i} min ago`
    };
  })
];
