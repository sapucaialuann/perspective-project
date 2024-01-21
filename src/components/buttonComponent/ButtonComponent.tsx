import React from "react";
import { ButtonType } from "../../types";

const ButtonComponent: React.FC<ButtonType> = ({
  text = "You need to add text",
  color = "white",
  bgColor = "#0076FF",
  id = "123",
}) => {
  const componentStyle: React.CSSProperties = {
    color: color,
    backgroundColor: bgColor,
    padding: "10px",
    cursor: "pointer",
  };

  return (
    <div id={id}>
      <button style={{ ...componentStyle }}>{text}</button>
    </div>
  );
};

export { ButtonComponent };
