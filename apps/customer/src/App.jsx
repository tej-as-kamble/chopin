import React, { useState, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { createAppRouter } from "./router";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(0);

  const router = createAppRouter(isLoggedIn, setIsLoggedIn);

  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
