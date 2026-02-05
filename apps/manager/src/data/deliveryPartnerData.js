export const generateDeliveryPartnersData = (count = 50) => {
  const names = ["James H.", "Sarah L.", "Mike T.", "David B.", "Emma W.", "Chris P.", "Amanda S.", "Robert J."];
  const areas = ["Downtown Sec 1", "Downtown Sec 4", "Uptown North", "Westside Hub"];
  const statuses = ["Active", "On Delivery", "Idle", "Paused", "Restricted"];
  const issuesList = ["High Cancellations", "Late Pickup", "Customer Complaint", null, null, null, null];

  return Array.from({ length: count }, (_, i) => {
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const hasActiveOrder = status === "On Delivery";

    return {
      id: `PTR-${1000 + i}`,
      name: `${names[i % names.length]}`,
      status: status,
      area: areas[Math.floor(Math.random() * areas.length)],
      activeOrderId: hasActiveOrder ? `#ORD-${Math.floor(Math.random() * 9000) + 1000}` : null,
      issues: [issuesList[Math.floor(Math.random() * issuesList.length)]].filter(Boolean),
      lastActive: `${Math.floor(Math.random() * 59)}m ago`
    };
  });
};