const cuisines = ["North Indian", "Chinese", "Italian", "South Indian", "Fast Food"];

const randomPick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const generateRestaurantInfo = () => ({
  image:
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  basic: {
    name: "Spice Junction",
    outlet: "Spice Junction – Downtown",
    type: randomPick(["Veg", "Non-Veg", "Both"]),
    cuisines: cuisines.sort(() => 0.5 - Math.random()).slice(0, 3),
  },
  contact: {
    owner: "Rohit Sharma",
    manager: "Amit Verma",
    phone: `+91 ${Math.floor(Math.random()*90000) + 10000} ${Math.floor(Math.random()*90000) + 10000}`,
    email: "support@spicejunction.com",
  },
  address: {
    line1: "12, MG Road",
    area: "Near Metro Station",
    city: "Bangalore",
    state: "Karnataka",
    pincode: `${Math.floor(Math.random()*900000) + 100000}`,
  },
  operational: {
    status: "Open",
    acceptingOrders: true,
    prepTime: `${20 + Math.floor(Math.random() * 15)} mins`,
    radius: `${3 + Math.floor(Math.random() * 5)} km`,
  },
  platform: {
    verified: true,
    fssai: "Active",
    gst: "Registered",
    outletId: `RT-${Math.floor(10000 + Math.random() * 90000)}`,
    joined: `${Math.floor(Math.random()*90) + 10} ${randomPick(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])} 2024`,
    manager: "Rahul (Area Manager)",
  },
});
