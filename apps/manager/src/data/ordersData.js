export const generateOrders = (count = 100) => {
  const statuses = ['Placed', 'Preparing', 'Ready', 'Out for Delivery', 'Delivered', 'Cancelled'];
  const areas = ['Downtown', 'West End', 'Tech Park', 'Suburbs', 'North Hills'];

  return Array.from({ length: count }, (_, i) => {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    return {
      id: `ORD-${10000 + i}`,
      customer: `Customer ${i + 1}`,
      restaurant: `Bistro ${Math.floor(Math.random() * 50) + 1}`,
      items: `${Math.floor(Math.random() * 5) + 1} items`,
      total: `$${(Math.random() * 100).toFixed(2)}`,
      status: status,
      driver: Math.random() > 0.3 ? `Driver ${Math.floor(Math.random() * 200)}` : 'Assigning...',
      time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 59).toString().padStart(2, '0')} PM`,
      area: areas[Math.floor(Math.random() * areas.length)],
    };
  });
};

export const ordersData = generateOrders(200);