const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const generateRestaurantDetails = () => {
    return {
        id: "REST-635421",
        status: getRandom(["Active", "Active", "Active", "Paused", "Offline"]),
        type: "Restaurant",
        legalName: "Spice Route Hospitality Pvt Ltd",
        tradeName: "The Great Indian Biryani House",
        address: "Shop 4, Phoenix Market City, Viman Nagar, Pune, Maharashtra 411014",
        area: "Pune East - Zone 4",
        manager: "Amit Verma",
        contact: "+91 97871 67155",
        rating: "4.7",
        metrics: [
            { label: "Total Orders (Today)", value: 37 },
            { label: "Accepted Orders", value: 31 },
            { label: "Cancelled Orders", value: 6 },
            { label: "Complaint Count", value: 1 }
        ],
        reviews: [
            {
                name: "Emily Blunt",
                rating: 5,
                orderId: "ORD-10001",
                review: "Service was great, prompt and efficient. My Silver Skillet meal was filling, hot and tasty."
            },
            {
                name: "Sarah Jenkins",
                rating: 4.5,
                orderId: "ORD-10002",
                review: "Very good choice for breakfast. The homemade hash is a must. A good variety of choices for all tastes."
            },
            {
                name: "Michael Chu",
                rating: 2.5,
                orderId: "ORD-10003",
                review: "My soup was cold, and the vegetables were clearly frozen, not fresh."
            },
            {
                name: "Sarah Jenkins",
                rating: 4.5,
                orderId: "ORD-10002",
                review: "Very good choice for breakfast. The homemade hash is a must. A good variety of choices for all tastes."
            },
            {
                name: "Emily Blunt",
                rating: 5,
                orderId: "ORD-10001",
                review: "Service was great, prompt and efficient. My Silver Skillet meal was filling, hot and tasty."
            },
        ]
    };
};