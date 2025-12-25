import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const MainLayout1 = ({isLoggedIn}) => {
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn}/>
      <Outlet />
    </>
  );
};

export default MainLayout1;
