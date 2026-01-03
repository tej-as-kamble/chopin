import { createBrowserRouter } from "react-router-dom";
import { RestaurantPartnerRoutes } from "./RestaurantPartnerRoutes";

export const createAppRouter = (isLoggedIn, setIsLoggedIn) => {
  return createBrowserRouter(RestaurantPartnerRoutes());
};
