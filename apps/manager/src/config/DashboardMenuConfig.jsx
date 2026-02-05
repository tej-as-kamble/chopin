import {
  FiGrid, FiBox, FiMapPin, FiTruck, FiAlertCircle, FiBarChart2, FiUser, FiHelpCircle, FiLogOut
} from "react-icons/fi";


export const MANAGER_MENU = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <FiGrid />,
    subItems: [
      { label: "Overview", path: "/dashboard/overview" },
      { label: "Your Team", path: "/dashboard/team", badge: "Soon" },
    ],
  },
  {
    id: "orders",
    label: "Orders",
    icon: <FiBox />,
    subItems: [
      { label: "All Orders", path: "/orders/all" },
      { label: "Active/Ongoing", path: "/orders/active" },
      { label: "Cancelled", path: "/orders/cancelled" },
    ],
  },
  {
    id: "restaurants",
    label: "Restaurants",
    icon: <FiMapPin />,
    subItems: [
      { label: "All Restaurants", path: "/restaurants/all" },
      { label: "Active", path: "/restaurants/active" },
      { label: "Paused", path: "/restaurants/paused" },
      { label: "Verifications", path: "/restaurants/verifications" },
    ],
  },
  {
    id: "partners",
    label: "Delivery Partners",
    icon: <FiTruck />,
    subItems: [
      { label: "All Partners", path: "/partners/all" },
      { label: "Online", path: "/partners/online" },
      { label: "Restricted", path: "/partners/restricted" },
    ],
  },
  {
    id: "tickets",
    label: "Tickets",
    icon: <FiAlertCircle />,
    subItems: [
      { label: "All Tickets", path: "/tickets/all" },
      { label: "Open", path: "/tickets/open" },
      { label: "Resolved", path: "/tickets/resolved" },
    ],
  },
  {
    id: "control",
    label: "Control & Monitoring",
    icon: <FiBarChart2 />,
    subItems: [
      { label: "Slot Restrictions", path: "/slot-restrictions" },
      { label: "Performance", path: "/performance" },
    ],
  },
];

export const MANAGER_FOOTER = [
  { label: "Your Profile", icon: <FiUser />, path: "/settings/profile" },
  { label: "Need Help?", icon: <FiHelpCircle />, path: "/settings/help" },
  { label: "Logout", icon: <FiLogOut />, path: "/logout", isDanger: true },
];