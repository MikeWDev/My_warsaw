import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css";
import "./general.css";
import "./queries.css";
import RestaurantContextProvider from "./Context/RestaurantContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RestaurantContextProvider>
      <App />
    </RestaurantContextProvider>
  </React.StrictMode>
);
