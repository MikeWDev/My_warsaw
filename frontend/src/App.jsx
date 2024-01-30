import MainPage from "./pages/MainPage";
import OurMenuPage from "./pages/OurMenuPage";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [],
  },
  {
    path: "/our-menu/zapiekankas",
    element: <OurMenuPage />,
    children: [],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
