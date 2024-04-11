import React from "react";
import { selectionData } from "../../hooks/selectionData";
const SelectionButtons = ({ setCategory }) => {
  return (
    <div className="menu-selection-con">
      {selectionData &&
        selectionData.map((selection) => {
          return (
            <button
              onClick={() => {
                setCategory(`${selection.category}`);
              }}
              key={selection._id}
            >
              {selection.category}
            </button>
          );
        })}
    </div>
  );
};

export default SelectionButtons;
