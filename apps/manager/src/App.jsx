import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { createAppRouter } from "./router";
import "./App.css";

function App() {

  const router = createAppRouter();

  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
