import { Outlet } from "react-router-dom";
import MenuSearchBar from "@/components/menu/MenuSearchBar";
import CategorySidebar from "@/components/menu/CategorySidebar";
import "./MenuPage.css";

const MenuPage = () => {
  return (
    <>
      <MenuSearchBar />
      
      <div className="rm-menu-layout">
        <CategorySidebar />
        <div className="rm-menu-content">
          <Outlet />
        </div>
      </div>

    </>
  );
};

export default MenuPage;
