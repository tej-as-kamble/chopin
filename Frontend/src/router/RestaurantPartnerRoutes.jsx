import React, { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import chefImg from "@/assets/chef-and-spoon.png";

// Auth
const AuthLayout = lazy(() => import("@/layout/AuthLayout"));
const LoginPage = lazy(() => import("@/pages/restaurant-partner/auth/LoginPage"));
const RegistrationPage = lazy(() => import("@/pages/restaurant-partner/auth/RegistrationPage"));
const RegistrationStatusPage = lazy(() => import("@/pages/restaurant-partner/auth/RegistrationStatusPage"));

// Dashboard
const DashboardLayout = lazy(() => import("@/layout/restaurant-partner/DashboardLayout"));
const RestaurantHome = lazy(() => import("@/pages/restaurant-partner/home/RestaurantHome"));

// Orders
const OrdersPage = lazy(() => import("@/pages/restaurant-partner/orders/OrdersPage"));
const OrderDetails = lazy(() => import("@/components/restaurant-partner/orders/OrderDetails"));

// Menu
const MenuPage = lazy(() => import("@/pages/restaurant-partner/menu/MenuPage"));
const ItemsGrid = lazy(() => import("@/components/restaurant-partner/menu/ItemsGrid"));
const ItemDetailsDrawer = lazy(() => import("@/components/restaurant-partner/menu/ItemDetailsDrawer"));
const AddItemPage = lazy(() => import("@/components/restaurant-partner/menu/AddItemPage"));

// Business
const EarningsPage = lazy(() => import("@/pages/restaurant-partner/earnings/EarningsPage"));
const SchedulePage = lazy(() => import("@/pages/restaurant-partner/schedule/SchedulePage"));
const OffersPage = lazy(() => import("@/pages/restaurant-partner/offers/OffersPage"));

// Support
const ReviewsPage = lazy(() => import("@/pages/restaurant-partner/reviews/ReviewsPage"));
const HelpPage = lazy(() => import("@/pages/restaurant-partner/help/HelpPage"));

// Settings
const RestaurantInfoPage = lazy(() => import("@/pages/restaurant-partner/settings/restaurant-info/RestaurantInfoPage"));
const BankDetailsPage = lazy(() => import("@/pages/restaurant-partner/settings/bank-details/BankDetailsPage"));




export const RestaurantPartnerRoutes = () => [
    {
        path: "/partner",
        element: <Outlet />,
        children: [
            { index: true, element: <Navigate to="/" replace /> },
            { path: "restaurant", element: <RestaurantHome /> },
        ],
    },
    {
        path: "/partner",
        element: <AuthLayout role={"all"} />,
        children: [
            {
                path: "restaurant",
                element: <Outlet />,
                children: [
                    { path: "login", element: <LoginPage />, },
                    { path: "register", element: <RegistrationPage />, },
                    { path: "status", element: <RegistrationStatusPage />, },
                ]
            }]
    },
    {
        path: "/partner",
        element: <DashboardLayout />,
        children: [
            {
                path: "restaurant",
                element: <Outlet />,
                children: [
                    {
                        path: "orders",
                        element: <OrdersPage />,
                        children: [
                            { path: ":orderId", element: <OrderDetails /> }
                        ]
                    },
                    {
                        path: "menu",
                        element: <MenuPage />,
                        children: [
                            { index: true, element: <img src={chefImg} alt="Chef Image" className="rm-chef-img" /> },
                            {
                                path: ":category",
                                element: <ItemsGrid />,
                                children: [
                                    { path: ":itemId", element: <ItemDetailsDrawer /> },
                                    { path: "search", element: <ItemsGrid /> },
                                ]
                            },
                        ],
                    },
                    {
                        path: "menu",
                        element: <Outlet />,
                        children: [
                            { path: "add", element: <AddItemPage /> },
                            { path: "edit/:itemId", element: <div>Edit Item</div> },
                        ]
                    },
                    { path: "earnings", element: <EarningsPage /> },
                    { path: "schedule", element: <SchedulePage /> },
                    { path: "offers", element: <OffersPage /> },
                    { path: "reviews", element: <ReviewsPage /> },
                    { path: "help", element: <HelpPage /> },
                    { path: "restaurant-info", element: <RestaurantInfoPage /> },
                    { path: "bank-details", element: <BankDetailsPage /> },
                    { path: "logout", element: <Navigate to="/partner/restaurant" replace /> },
                ],
            },
        ],
    },
];