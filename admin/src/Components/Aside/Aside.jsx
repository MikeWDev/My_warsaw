import React from "react";
import ActionButton from "./ActionButton";

const Aside = () => {
  return (
    <aside>
      <div className="actions-con">
        <div className="actions-heading">
          <span></span>
          <h2>Actions</h2>
        </div>
        <nav>
          <ActionButton />
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
