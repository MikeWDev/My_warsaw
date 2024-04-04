import MainPage from "./pages/MainPage";
import OurMenuPage from "./pages/OurMenuPage";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createRoutesFromElements,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_APP_FIREBASE_API}`,
  authDomain: "mywarsaw-4365c.firebaseapp.com",
  projectId: "mywarsaw-4365c",
  storageBucket: "mywarsaw-4365c.appspot.com",
  messagingSenderId: "553441328593",
  appId: "1:553441328593:web:47822d1c085789ae83f4f0",
  measurementId: "G-PYSK527C31",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
