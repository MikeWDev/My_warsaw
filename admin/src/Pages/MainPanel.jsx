import React from "react";
import TopBar from "../Components/TopBar/TopBar";
import Aside from "../Components/Aside/Aside";

const MainPanel = () => {
  return (
    <div className="admin-panel">
      <TopBar />
      <div className="main-panel">
        <Aside />
      </div>
    </div>
  );
};

export default MainPanel;
