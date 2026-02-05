const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const getPartnerDetails = () => {
  return {
    id: "DEL-178654",
    status: getRandom(["Active", "Active", "Active", "Paused", "Offline"]),
    name: "Anand Kumar",
    address: "Shop 4, Phoenix Market City, Viman Nagar, Pune, Maharashtra 411014",
    area: "Pune East - Zone 4",
    joinDate: new Date().toLocaleDateString(),
    phone: "+91 97871 67155",
    contact: "+91 97871 67155",
    rating: "4.3",
    vehicle: {
      type: "Motorbike",
      plate: "MH13-AZ-4321",
    },
    metrics: [
      { label: "Total Orders (Today)", value: 18 },
      { label: "Accepted Orders", value: 17 },
      { label: "Cancelled Orders", value: 1 },
      { label: "Complaint Count", value: 0 }
    ],
    reviews: [
      {
        name: "Emily Blunt",
        rating: 5,
        orderId: "ORD-10001",
        review: "Service was great, prompt and efficient. My Silver Skillet meal was filling, hot and tasty."
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