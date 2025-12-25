import React, { useState, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Search = lazy(() => import('./pages/search/Search'));
const MainLayout1 = lazy(() => import('./pages/layout/MainLayout1'));
const MainLayoutForUser = lazy(() => import('./pages/layout/MainLayoutForUser'));
const AuthLayout = lazy(() => import('./pages/layout/AuthLayout'));
const Home = lazy(() => import("./pages/home/Home"));
const UserHome = lazy(() => import('./pages/home/UserHome'));
const Login = lazy(() => import('./components/Auth/Login'));
const Signup = lazy(() => import('./components/Auth/Signup'));
const ForgetPassword = lazy(() => import('./components/Auth/ForgetPassword'));
const ResetPassword = lazy(() => import('./components/Auth/ResetPassword'));
const About = lazy(() => import('./components/About'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Help = lazy(() => import('./components/Help/Help'));
const DeliveryPartner = lazy(() => import('./components/DeliveryPartner/DeliveryPartner'));
const Profile = lazy(() => import("./pages/profile/Profile"));
const RestaurantList = lazy(() => import("./components/UserHome/RestaurantList"));
const RestaurantPage = lazy(() => import("./pages/restaurant/RestaurantPage"));
const Cart = lazy(() => import("./pages/card/Cart"));
const Order = lazy(() => import("./pages/order/Order"));
const OrderDetailsPage = lazy(() => import("./pages/order/OrderDetailsPage"));
const Address = lazy(() => import("./pages/address/Address"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(0);

  return (
    <Router>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          <Route element={<MainLayout1 isLoggedIn={isLoggedIn} />}>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserHome />} />
            <Route path="/restaurant" element={<RestaurantList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/help" element={<Help />} />
            <Route path="/delivery-parnter" element={<DeliveryPartner />} />
          </Route>

          <Route element={<MainLayoutForUser isLoggedIn={isLoggedIn} />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/address" element={<Address />} />

            <Route path="/search" element={<Search />} />

            <Route path="/restaurant/:id" element={<RestaurantPage />} />

            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/order" element={< />} /> */}

            <Route path="/order/place/:cartId" element={<Order />} />
            <Route path="/order/:cartId" element={<OrderDetailsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
