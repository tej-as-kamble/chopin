import { createBrowserRouter } from "react-router-dom";
import { UserRoutes } from "./UserRoutes";

export const createAppRouter = (isLoggedIn, setIsLoggedIn) => {
  return createBrowserRouter(UserRoutes(isLoggedIn, setIsLoggedIn));
};
