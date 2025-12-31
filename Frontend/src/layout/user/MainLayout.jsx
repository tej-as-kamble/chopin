import { Outlet } from "react-router-dom";
import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";

const MainLayout1 = ({ isLoggedIn }) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout1;
