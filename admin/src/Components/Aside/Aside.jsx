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
          <ActionButton />
          <ActionButton />
          <ActionButton />
          <ActionButton />
        </nav>
      </div>
    </aside>
  );
};

export default Aside;
