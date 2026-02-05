const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const areas = ["Downtown Sector B", "North District", "West Side Hub", "Tech Park Zone", "Suburban East"];
const managers = ["Alex V.", "Sarah M.", "James R.", "Priya K.", "David L."];
const shifts = ["Morning Rush", "Peak Lunch", "Afternoon Lull", "Peak Dinner", "Late Night"];
const restaurantNames = ["Burger King - Main St", "Sushi Zen", "Pizza Hut - Central", "Taco Bell - North", "Joe's Diner", "Pasta House", "Curry Point"];
const trends = ["+12%", "-2%", "Stable", "Urgent", "+5%", "-8%", "+15%", "Spiking"];

const alertTemplates = [
  { severity: "critical", text: "Zone B2 Rider deficiency detected (High Rain)." },
  { severity: "warning", text: "Order cancellation rate spiked > 2% in North District." },
  { severity: "info", text: "Scheduled maintenance for Payment Gateway at 03:00 AM." },
  { severity: "warning", text: "High preparation times reported in Sector 4." },
  { severity: "critical", text: "Server latency exceeding 500ms." },
  { severity: "success", text: "Fleet efficiency reached all-time high." }
];

export const generateDashboardData = () => {
  const totalRest = getRandomInt(400, 500);
  const onlineRest = totalRest - getRandomInt(5, 30);
  const congestedRestCount = getRandomInt(0, 12);

  const totalPartners = getRandomInt(250, 350);
  const activePartners = totalPartners - getRandomInt(10, 50);

  const healthScore = getRandomInt(75, 100);
  let healthStatus = "Optimal";
  let healthMsg = "System operating within normal parameters.";

  if (healthScore < 85) {
    healthStatus = "High Load";
    healthMsg = "Demand is 15% above forecast. Fleet assignment logic auto-adjusted.";
  } else if (healthScore < 90) {
    healthStatus = "Moderate Load";
    healthMsg = "Traffic increasing in downtown sectors.";
  }

  return {
    context: {
      areaName: pickRandom(areas),
      managerOnDuty: pickRandom(managers),
      currentShift: pickRandom(shifts)
    },
    metrics: [
      {
        id: 1,
        label: "Active Orders",
        value: getRandomInt(800, 1500),
        trend: getRandomInt(0, 1) ? `+${getRandomInt(1, 20)}%` : `-${getRandomInt(1, 10)}%`,
        type: "primary"
      },
      {
        id: 2,
        label: "Avg Prep Time",
        value: `${getRandomInt(10, 25)}m`,
        trend: getRandomInt(0, 1) ? `+${getRandomInt(1, 5)}%` : `-${getRandomInt(1, 5)}%`,
        type: "neutral"
      },
      {
        id: 3,
        label: "Fleet Availability",
        value: `${getRandomInt(70, 98)}%`,
        trend: "Stable",
        type: "success"
      },
      {
        id: 4,
        label: "Pending Issues",
        value: getRandomInt(0, 15),
        trend: getRandomInt(0, 1) ? "Urgent" : "Stable",
        type: "warning"
      },
    ],
    systemHealth: {
      status: healthStatus,
      score: healthScore,
      message: healthMsg
    },
    liveSnapshot: {
      restaurants: {
        total: totalRest,
        online: onlineRest,
        congested: congestedRestCount,
        topCongested: Array.from({ length: Math.min(congestedRestCount, 2) }, () => ({
          name: pickRandom(restaurantNames),
          wait: `${getRandomInt(20, 55)}m`
        }))
      },
      partners: {
        total: totalPartners,
        active: activePartners,
        idle: totalPartners - activePartners,
        zoneCoverage: `${getRandomInt(85, 99)}%`
      }
    },
    alerts: Array.from({ length: getRandomInt(2, 10) }, (_, i) => {
      const template = pickRandom(alertTemplates);
      return {
        id: 100 + i,
        severity: template.severity,
        time: `${getRandomInt(1, 59)}m ago`,
        text: template.text
      };
    })
  };
};