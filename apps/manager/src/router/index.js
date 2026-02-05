import { createBrowserRouter } from "react-router-dom";
import { ManagerRoutes } from "./ManagerRoutes";

export const createAppRouter = () => {
  return createBrowserRouter(ManagerRoutes());
};