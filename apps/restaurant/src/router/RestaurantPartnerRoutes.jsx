import React, { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";
import chefImg from "@/assets/chef-and-spoon.png";

// Auth
const AuthLayout = lazy(() => import("@/layout/AuthLayout"));
const LoginPage = lazy(() => import("@/pages/auth/LoginPage"));
const RegistrationPage = lazy(() => import("@/pages/auth/RegistrationPage"));
const RegistrationStatusPage = lazy(() => import("@/pages/auth/RegistrationStatusPage"));

// Dashboard
const DashboardLayout = lazy(() => import("@/layout/DashboardLayout"));
const RestaurantHome = lazy(() => import("@/pages/home/RestaurantHome"));

// Orders
const OrdersPage = lazy(() => import("@/pages/orders/OrdersPage"));
const OrderDetails = lazy(() => import("@/components/orders/OrderDetails"));

// Menu
const MenuPage = lazy(() => import("@/pages/menu/MenuPage"));
const ItemsGrid = lazy(() => import("@/components/menu/ItemsGrid"));
const ItemDetailsDrawer = lazy(() => import("@/components/menu/ItemDetailsDrawer"));
const AddItemPage = lazy(() => import("@/components/menu/AddItemPage"));

// Business
const EarningsPage = lazy(() => import("@/pages/earnings/EarningsPage"));
const SchedulePage = lazy(() => import("@/pages/schedule/SchedulePage"));
const OffersPage = lazy(() => import("@/pages/offers/OffersPage"));

// Support
const ReviewsPage = lazy(() => import("@/pages/reviews/ReviewsPage"));
const HelpPage = lazy(() => import("@/pages/help/HelpPage"));

// Settings
const RestaurantInfoPage = lazy(() => import("@/pages/settings/restaurant-info/RestaurantInfoPage"));
const BankDetailsPage = lazy(() => import("@/pages/settings/bank-details/BankDetailsPage"));




export const RestaurantPartnerRoutes = () => [
    { index: true, element: <RestaurantHome /> },
    {
        element: <AuthLayout role="all" />,
        children: [
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegistrationPage /> },
            { path: "status", element: <RegistrationStatusPage /> },
        ],
    },
    {
        element: <DashboardLayout />,
        children: [
            {
                path: "orders",
                element: <OrdersPage />,
                children: [
                    { path: ":orderId", element: <OrderDetails /> }
                ],
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
            { path: "logout", element: <Navigate to="/" replace /> },
        ],
    },
];
