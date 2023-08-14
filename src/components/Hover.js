import React from "react";

const Hover = ({ click, onClick, over, onOver }) => {
  return (
    <div>
      <button onClick={() => onClick()}>Click {click} times</button>
      <h1 onMouseOver={() => onOver()}>Hover {over} times</h1>
    </div>
  );
};

export default Hover;
