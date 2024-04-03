import MainPanel from "./Pages/MainPanel";
import OrdersPanel from "./Pages/OrdersPanel";
import "./Scss/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPanel />,
      children: [
        {
          path: "orders",
          element: <OrdersPanel />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
