export const orderDetailsData = () => {
  const restaurants = [
    { name: 'Urban Bistro & Grill', address: '142 Market St' },
    { name: 'Sushi Zen', address: '88 Oak Avenue' },
    { name: 'Luigi’s Pizza', address: '221 B Baker St' },
    { name: 'Taco Fiesta', address: '55 Camino Real' },
    { name: 'Burger Joint', address: '99 King Way' }
  ];

  const drivers = [
    { name: 'David K.', vehicle: 'Bike - Yamaha MT' },
    { name: 'Sarah M.', vehicle: 'Scooter - Honda PCX' },
    { name: 'Mike R.', vehicle: 'Car - Toyota Prius' },
    { name: 'Jessica L.', vehicle: 'E-Bike - Super73' }
  ];

  const customers = [
    { name: 'Sarah Jenkins', address: '442 Pine Ave, Apt 4B' },
    { name: 'Michael Chu', address: '1200 Tech Blvd, Suite 200' },
    { name: 'Emily Blunt', address: '15 Maple Drive' },
    { name: 'John Doe', address: '88 Main St, Lobby' }
  ];

  const areas = ['Downtown', 'West End', 'North Hills', 'Tech Park', 'Suburbs'];

  const possibleIssues = [
    { type: 'delay', msg: 'Kitchen prep exceeded SLA by 5 mins.' },
    { type: 'traffic', msg: 'Heavy traffic on delivery route.' },
    { type: 'weather', msg: 'Rain delay affecting driver speed.' },
    { type: 'system', msg: 'Payment verification took longer than expected.' }
  ];

  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const statuses = ['Placed', 'Confirmed', 'Preparing', 'Ready', 'Out for Delivery', 'Delivered'];
  const currentStageIndex = randInt(0, 5);
  const currentStatus = statuses[currentStageIndex];
  const isLive = currentStatus !== 'Delivered' && currentStatus !== 'Cancelled';

  let timeCursor = new Date(Date.now() - 45 * 60000);

  const timeline = statuses.map((status, index) => {
    timeCursor = new Date(timeCursor.getTime() + randInt(5, 10) * 60000);

    const isCompleted = index < currentStageIndex;
    const isCurrent = index === currentStageIndex;

    return {
      status: status,
      time: index > currentStageIndex ? `Est. ${formatTime(timeCursor)}` : formatTime(timeCursor),
      completed: isCompleted || (status === 'Delivered' && isCompleted),
      active: isCurrent
    };
  });

  const restaurant = pick(restaurants);
  const driver = pick(drivers);
  const customer = pick(customers);
  const area = pick(areas);

  const hasIssues = Math.random() > 0.7;
  const issuesList = hasIssues ? [pick(possibleIssues)] : [];

  const predictedEta = new Date(Date.now() + randInt(5, 20) * 60000);
  const promisedEta = new Date(predictedEta.getTime() - randInt(-5, 10) * 60000);

  return {
    id: "ORD-681755",
    customerId: "CUST-274335",
    customerName: "Sarah Jenkins",
    customerAddress: "House No. 15, Lane No. 3, Behind City Pride, Shukrawar Peth, Pune, Maharashtra - 411002",
    area: "Pune East - Zone 4",
    status: currentStatus,
    customerContact: "+91 98135 343105",
    customerOrderCount: "47",
    customerCancellationRate: `${(3 * 100 / 47).toFixed(2)}%`,

    orderSummary: [
      { item: "Chana Masala", quantity: 2, price: 150 },
      { item: "Tawa Roti", quantity: 8, price: 15 },
      { item: "Rice", quantity: 2, price: 60 },
      { item: "Paneer Role", quantity: 2, price: 85 },
    ],

    billDetails: {
      method: 'Through UPI',
      total: 710
    },


    restaurant: {
      name: restaurant.name,
      address: restaurant.address,
      phone: `+1 (555) ${randInt(100, 999)}-${randInt(1000, 9999)}`,
      status: Math.random() > 0.8 ? 'High Load' : 'Normal Load'
    },

    driver: {
      name: driver.name,
      id: `DRV-${randInt(100, 999)}`,
      vehicle: driver.vehicle,
      phone: `+1 (555) ${randInt(100, 999)}-${randInt(1000, 9999)}`,
      status: isLive ? 'Active' : 'Idle',
      lat: 40 + Math.random() * 0.1,
      long: 20 + Math.random() * 0.1
    },

    customer: {
      name: customer.name,
      address: customer.address,
      notes: Math.random() > 0.5 ? 'Please leave at door.' : 'Ring doorbell.'
    },

    timeline: [
      {
        status: "Placed",
        isCompleted: true,
        isActive: false,
        time: formatTime(new Date(timeCursor.getTime() + randInt(5, 10) * 60000)),
      },
      {
        status: "Confirmed",
        isCompleted: true,
        isActive: false,
        time: formatTime(new Date(timeCursor.getTime() + randInt(15, 20) * 60000)),
      },
      {
        status: "Preparing",
        isCompleted: true,
        isActive: false,
        time: formatTime(new Date(timeCursor.getTime() + randInt(20, 25) * 60000)),
      },
      {
        status: "Ready",
        isCompleted: false,
        isActive: true,
        time: formatTime(new Date(timeCursor.getTime() + randInt(25, 35) * 60000)),
      },
      {
        status: "Out for Delivery",
        isCompleted: false,
        isActive: false,
        time: formatTime(new Date(timeCursor.getTime() + randInt(35, 40) * 60000)),
      },
      {
        status: "Delivered",
        isCompleted: false,
        isActive: false,
        time: formatTime(new Date(timeCursor.getTime() + randInt(40, 50) * 60000)),
      },
    ],


    created_at: timeline[0].time,
    last_updated: formatTime(new Date()),

    oldTimeline: timeline,

    sla: {
      promised_eta: formatTime(promisedEta),
      predicted_eta: formatTime(predictedEta),
      prep_time_actual: `${randInt(12, 25)} min`,
      prep_time_target: '15 min',
      pickup_delta: Math.random() > 0.5 ? `+${randInt(1, 10)} min` : 'On Time'
    },

    issues: issuesList
  };
};