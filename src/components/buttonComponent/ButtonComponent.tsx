import React from "react";
import { ButtonType } from "../../types";

interface ButtonTypeProps {
  buttonElement: ButtonType;
}

const ButtonComponent: React.FC<ButtonTypeProps> = ({ buttonElement }) => {
  const componentStyle: React.CSSProperties = {
    color: buttonElement.color,
    backgroundColor: buttonElement.bgColor,
    padding: "10px",
    cursor: "pointer",
  };

  return (
    <div id={buttonElement.id}>
      <button style={{ ...componentStyle }}>{buttonElement.text}</button>
    </div>
  );
};

export { ButtonComponent };
