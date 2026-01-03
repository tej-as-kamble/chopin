export const REVIEWS = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    customer: `Customer ${i + 1}`,
    rating: Math.floor(Math.random() * 5) + 1,
    comment: "Food quality was really good. Packaging was neat and delivery was on time. Would definitely order again.",
    item: ["Burger", "Pizza", "Biryani", "Pasta", "Paneer"][i % 5],
    orderId: `ORD-${12000 + i}`,
    date: `2025-01-${(Math.random() % 28) + 1}`,
}));
