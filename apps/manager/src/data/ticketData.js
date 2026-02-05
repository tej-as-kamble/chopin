export const generateTickets = (count = 50) => {
  const sources = ['Customer', 'Restaurant', 'Delivery Partner'];
  const priorities = ['High', 'Medium', 'Low'];
  const statuses = ['Open', 'In Progress', 'Resolved', 'Escalated'];
  const issues = [
    'Order never arrived',
    'Item missing from bag',
    'Rider cannot locate address',
    'Restaurant tablet offline',
    'Wrong item delivered',
    'Payment dispute',
    'Food spilled in transit',
    'Long wait time at restaurant'
  ];

  return Array.from({ length: count }, (_, i) => {
    const isSlaBreached = Math.random() < 0.15;
    const priority = isSlaBreached ? 'High' : priorities[Math.floor(Math.random() * priorities.length)];

    return {
      id: `TKT-${1000 + i}`,
      title: issues[Math.floor(Math.random() * issues.length)],
      source: sources[Math.floor(Math.random() * sources.length)],
      priority: priority,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      createdAt: `${Math.floor(Math.random() * 12) + 1} hours ago`,
      isSlaBreached: isSlaBreached,
    };
  });
};