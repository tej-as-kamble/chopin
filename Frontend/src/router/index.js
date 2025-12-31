import { createBrowserRouter } from "react-router-dom";
import { UserRoutes } from "./UserRoutes";
import { RestaurantPartnerRoutes } from "./RestaurantPartnerRoutes";

export const createAppRouter = (isLoggedIn, setIsLoggedIn) => {
  return createBrowserRouter(
    [...UserRoutes(isLoggedIn, setIsLoggedIn), ...RestaurantPartnerRoutes()]
  );
};
