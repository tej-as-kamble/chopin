import { Outlet } from "react-router-dom";
import RestaurantSidebar from "@/components/RestaurantSidebar";
import RestaurantTopbar from "@/components/RestaurantTopbar";
import "./DashboardLayout.css";

const DashboardLayout = () => {
  return (
    <div className="rd-layout">
      <RestaurantSidebar />

      <div className="rd-main-wrapper">
        <RestaurantTopbar />
        <main className="rd-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
