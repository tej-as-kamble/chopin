export const generateRestaurantsData = (count = 24) => {
  const areas = ["Downtown Core", "Westside Heights", "Financial District", "Uptown", "Portside Logistics"];
  const statuses = ["Active", "Active", "Active", "Paused"];
  const names = [
    "Urban Spice", "The Golden Bowl", "Sizzle & Grill", "Green Leaf Bistro", "Noodle Haven",
    "Burger Capital", "Ocean Catch", "Taco Fiestas", "Morning Brew Co.", "Pasta House",
    "Sushi Zen", "Firewood Pizza", "The Salad Bar", "Curry Point", "Steak Loft"
  ];

  return Array.from({ length: count }, (_, i) => {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const hasIssues = status === "Active" && Math.random() > 0.7;

    return {
      id: `rest-${i + 100}`,
      name: `${names[Math.floor(Math.random() * names.length)]} ${String.fromCharCode(65 + i % 5)}`,
      image: `https://images.unsplash.com/photo-${['1517248135467-4c7edcad34c4', '1552566626-52f8b828add9', '1559339352-11d035aa65de', '1514362545857-3bc16c4c7d1b'][i % 4]}?w=600&q=80`,
      area: areas[Math.floor(Math.random() * areas.length)],
      status: status,
      lastActive: `${Math.floor(Math.random() * 59) + 1}m ago`,
      todayOrders: Math.floor(Math.random() * 150),
      metrics: {
        delayRisk: hasIssues && Math.random() > 0.5,
        highCancellations: hasIssues && Math.random() > 0.7,
        complaints: hasIssues && Math.random() > 0.8 ? Math.floor(Math.random() * 5) + 1 : 0,
      }
    };
  });
};