import React, { lazy } from "react";
import { Outlet } from "react-router-dom";

/* layouts */
const MainLayout = lazy(() => import("@/layout/user/MainLayout"));
const MainLayoutForUser = lazy(() => import("@/layout/user/MainLayoutForUser"));
const AuthLayout = lazy(() => import("@/layout/AuthLayout"));

/* pages */
const Home = lazy(() => import("@/pages/user/home/Home"));
const UserHome = lazy(() => import("@/pages/user/home/UserHome"));
const Profile = lazy(() => import("@/pages/user/profile/Profile"));
const Search = lazy(() => import("@/pages/user/search/Search"));
const RestaurantPage = lazy(() => import("@/pages/user/restaurant/RestaurantPage"));
const Cart = lazy(() => import("@/pages/user/card/Cart"));
const Order = lazy(() => import("@/pages/user/order/Order"));
const OrderDetailsPage = lazy(() => import("@/pages/user/order/OrderDetailsPage"));
const Address = lazy(() => import("@/pages/user/address/Address"));

/* auth */
const Login = lazy(() => import("@/components/user/Auth/Login"));
const Signup = lazy(() => import("@/components/user/Auth/Signup"));
const ForgetPassword = lazy(() => import("@/components/user/Auth/ForgetPassword"));
const ResetPassword = lazy(() => import("@/components/user/Auth/ResetPassword"));

/* common */
const About = lazy(() => import("@/components/user/About"));
const ContactUs = lazy(() => import("@/components/user/ContactUs"));
const Help = lazy(() => import("@/components/user/Help/Help"));
const RestaurantList = lazy(() => import("@/components/user/UserHome/RestaurantList"));
const DeliveryPartner = lazy(() => import("@/components/user/DeliveryPartner/DeliveryPartner"));

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
