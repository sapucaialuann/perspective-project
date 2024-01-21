import React from "react";
import { TextType } from "../../types";

const TextComponent: React.FC<TextType> = ({
  text = "You need to add text",
  color = "white",
  align = "start",
  id = "123",
}) => {
  const componentStyle: React.CSSProperties = {
    color: color,
    textAlign: align,
  };
  return (
    <div id={id}>
      <p style={{ ...componentStyle }}>{text}</p>
    </div>
  );
};

export { TextComponent };
