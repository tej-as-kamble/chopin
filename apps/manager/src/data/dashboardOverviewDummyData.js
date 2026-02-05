export const kpiData = [
  { label: "Active Orders", value: "842", trend: "+8%", status: "good" },
  { label: "Fleet Utility", value: "92%", trend: "High Load", status: "busy" },
  { label: "Avg Deliv Time", value: "24m", trend: "-2m", status: "good" },
  { label: "Escalations", value: "05", trend: "Requires Action", status: "stress" }
];

export const healthData = {
  status: "Stable",
  load: 65,
  message: "Dispatch algorithm operating at optimal efficiency."
};

export const zoneData = {
  restaurants: { open: 320, busy: 45, closed: 12 },
  riders: { active: 410, busy: 380, idle: 30 }
};

export const alertsData = [
  { id: 1, level: "stress", title: "Rider Shortage", time: "2m ago", text: "Zone 4 demand exceeding supply by 15%." },
  { id: 2, level: "busy", title: "Weather Warning", time: "15m ago", text: "Heavy rain expected in Sector 7." },
  { id: 3, level: "info", title: "Shift Change", time: "1h ago", text: "Evening fleet login sequence started." }
];