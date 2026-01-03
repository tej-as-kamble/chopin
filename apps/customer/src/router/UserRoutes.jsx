import React, { lazy } from "react";
import { Outlet } from "react-router-dom";

/* layouts */
const MainLayout = lazy(() => import("@/layout/MainLayout"));
const MainLayoutForUser = lazy(() => import("@/layout/MainLayoutForUser"));
const AuthLayout = lazy(() => import("@/layout/AuthLayout"));

/* pages */
const Home = lazy(() => import("@/pages/home/Home"));
const UserHome = lazy(() => import("@/pages/home/UserHome"));
const Profile = lazy(() => import("@/pages/profile/Profile"));
const Search = lazy(() => import("@/pages/search/Search"));
const RestaurantPage = lazy(() => import("@/pages/restaurant/RestaurantPage"));
const Cart = lazy(() => import("@/pages/card/Cart"));
const Order = lazy(() => import("@/pages/order/Order"));
const OrderDetailsPage = lazy(() => import("@/pages/order/OrderDetailsPage"));
const Address = lazy(() => import("@/pages/address/Address"));

/* auth */
const Login = lazy(() => import("@/components/Auth/Login"));
const Signup = lazy(() => import("@/components/Auth/Signup"));
const ForgetPassword = lazy(() => import("@/components/Auth/ForgetPassword"));
const ResetPassword = lazy(() => import("@/components/Auth/ResetPassword"));

/* common */
const About = lazy(() => import("@/components/About"));
const ContactUs = lazy(() => import("@/components/ContactUs"));
const Help = lazy(() => import("@/components/Help/Help"));
const RestaurantList = lazy(() => import("@/components/UserHome/RestaurantList"));
const DeliveryPartner = lazy(() => import("@/components/DeliveryPartner/DeliveryPartner"));

export const UserRoutes = (isLoggedIn, setIsLoggedIn) => [
  {
    element: <AuthLayout role={"user"} />,
    children: [
      { path: "/login", element: <Login setIsLoggedIn={setIsLoggedIn} /> },
      { path: "/signup", element: <Signup /> },
      { path: "/forget-password", element: <ForgetPassword /> },
      { path: "/reset-password", element: <ResetPassword /> },
    ],
  },
  {
    element: <MainLayout isLoggedIn={isLoggedIn} />,
    children: [
      { index: true, element: <Home /> },
      { path: "user", element: <UserHome /> },
      { path: "restaurant", element: <RestaurantList /> },
      { path: "about", element: <About /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "help", element: <Help /> },
    ],
  },
  {
    element: <MainLayoutForUser isLoggedIn={isLoggedIn} />,
    children: [
      { path: "profile", element: <Profile /> },
      { path: "address", element: <Address /> },
      { path: "search", element: <Search /> },
      { path: "restaurant/:id", element: <RestaurantPage /> },
      { path: "cart", element: <Cart /> },
      { path: "order/place/:cartId", element: <Order /> },
      { path: "order/:orderId", element: <OrderDetailsPage /> },
    ],
  },
  {
    path: "/partner",
    element: <MainLayoutForUser />,
    children: [
      { path: "delivery", element: <DeliveryPartner /> }
    ]
  }
];
