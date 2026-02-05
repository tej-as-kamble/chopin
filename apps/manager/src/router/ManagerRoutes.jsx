import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "@chopin/ui-web";

const AllOrdersPage = lazy(() => import("@/pages/orders/AllOrdersPage"));
const ActiveOrdersPage = lazy(() => import("@/pages/orders/ActiveOrdersPage"));
const CancelledOrdersPage = lazy(() => import("@/pages/orders/CancelledOrdersPage"));
const OrderDetailsPage = lazy(() => import("@/pages/orders/orderDetails/OrderDetailsPage"));
const YourTeamPage = lazy(() => import("@/pages/dashboard/YourTeampage"));
const AllRestaurantsPage = lazy(() => import("@/pages/restaurant/AllRestaurantsPage"));
const ActiveRestaurantsPage = lazy(() => import("@/pages/restaurant/ActiveRestaurantsPage"));
const PausedRestaurantsPage = lazy(() => import("@/pages/restaurant/PausedRestaurantsPage"));
const RestaurantDetailsPage = lazy(() => import("@/pages/restaurant/RestaurantDetailsPage"));
const DeliveryPartnersPage = lazy(() => import("@/pages/delivery/DeliveryPartnersPage"));
const OnlineDeliveryPartnersPage = lazy(() => import("@/pages/delivery/OnlineDeliveryPartnersPage"));
const RestrictedDeliveryPartnersPage = lazy(() => import("@/pages/delivery/RestrictedDeliveryPartnersPage"));
const DeliveryPartnerDetailsPage = lazy(() => import("@/pages/delivery/DeliveryPartnerDetailsPage"));
const TicketsPage = lazy(() => import("@/pages/tickets/TicketsPage"));
const OpenTicketsPage = lazy(() => import("@/pages/tickets/OpenTicketsPage"));
const ResolvedTicketsPage = lazy(() => import("@/pages/tickets/ResolvedTicketsPage"));
const TicketDetailsPage = lazy(() => import("@/pages/tickets/TicketDetailsPage"));
const VerificationPage = lazy(() => import("@/pages/restaurant/verification/verificationPage"));
const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const Sidebar = lazy(() => import("@/components/sidebar/Sidebar"));
const Topbar = lazy(() => import("@/components/topbar/Topbar"));
const OverviewPage = lazy(() => import("@/pages/dashboard/OverviewPage"));
const SlotRestrictionsPage = lazy(() => import("@/pages/monitoring/SlotRestrictionsPage"));
const PerformancePage = lazy(() => import("@/pages/monitoring/performancePage"));
const ProfilePage = lazy(() => import("@/pages/setting/ProfilePage"));
const HelpPage = lazy(() => import("@/pages/setting/helpPage"));
const VerificationDetailsPage = lazy(() => import("@/pages/restaurant/verification/VerificationDetailsPage"));



export const ManagerRoutes = () => [
    { index: true, element: <Navigate to="/login" replace /> },
    {
        element: <AuthLayout role="manager" />,
        children: [
            { path: "login", element: <LoginPage /> },
        ],
    },
    {
        element: <DashboardLayout sidebarSlot={<Sidebar />} topbarSlot={<Topbar />} />,
        children: [
            {
                path: "dashboard",
                element: <Outlet />,
                children: [
                    { index: true, element: <Navigate to="overview" replace /> },
                    { path: "overview", element: <OverviewPage /> },
                    { path: "team", element: <YourTeamPage /> },
                ]
            },
            {
                path: "orders",
                element: <Outlet />,
                children: [
                    { index: true, element: <Navigate to="all" replace /> },
                    { path: "all", element: <AllOrdersPage /> },
                    { path: "active", element: <ActiveOrdersPage /> },
                    { path: "cancelled", element: <CancelledOrdersPage /> },
                    {
                        path: "view",
                        element: <Outlet />,
                        children: [
                            { path: ":OrderId", element: <OrderDetailsPage /> },
                        ]
                    }
                ]
            },
            {
                path: "restaurants",
                element: <Outlet />,
                children: [
                    { index: true, element: <Navigate to="all" replace /> },
                    { path: "all", element: <AllRestaurantsPage /> },
                    { path: "active", element: <ActiveRestaurantsPage /> },
                    { path: "Paused", element: <PausedRestaurantsPage /> },
                    {
                        path: "verifications",
                        element: <Outlet />,
                        children: [
                            { index: true, element: <VerificationPage /> },
                            { path: ":verId", element: <VerificationDetailsPage /> }
                        ]
                    },
                    {
                        path: "view",
                        element: <Outlet />,
                        children: [
                            { path: ":restaurantId", element: <RestaurantDetailsPage /> },
                        ]
                    }
                ]
            },
            {
                path: "partners",
                element: <Outlet />,
                children: [
                    { index: true, element: <Navigate to="all" replace /> },
                    { path: "all", element: <DeliveryPartnersPage /> },
                    { path: "online", element: <OnlineDeliveryPartnersPage /> },
                    { path: "restricted", element: <RestrictedDeliveryPartnersPage /> },
                    {
                        path: "view",
                        element: <Outlet />,
                        children: [
                            { path: ":partnerId", element: <DeliveryPartnerDetailsPage /> }, ,
                        ]
                    }
                ]
            },
            {
                path: "tickets",
                element: <Outlet />,
                children: [
                    { index: true, element: <Navigate to="all" replace /> },
                    { path: "all", element: <TicketsPage /> },
                    { path: "Open", element: <OpenTicketsPage /> },
                    { path: "resolved", element: <ResolvedTicketsPage /> },
                    {
                        path: "view",
                        element: <Outlet />,
                        children: [
                            { path: ":ticketId", element: <TicketDetailsPage /> },
                        ]
                    }
                ]
            },
            { path: "slot-restrictions", element: <SlotRestrictionsPage /> },
            { path: "performance", element: <PerformancePage /> },
            {
                path: "settings",
                element: <Outlet />,
                children: [
                    { index: true, element: <Navigate to="profile" replace /> },
                    { path: "profile", element: <ProfilePage /> },
                    { path: "help", element: <HelpPage /> },
                ]
            },
            { path: "logout", element: <Navigate to="/" replace /> },
        ]
    },
];
