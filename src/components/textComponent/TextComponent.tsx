import React from "react";
import { TextType } from "../../types";

interface TextTypeProps {
  textElement: TextType;
}

const TextComponent: React.FC<TextTypeProps> = ({ textElement }) => {
  const componentStyle: React.CSSProperties = {
    color: textElement.color,
  };
  return (
    <div id={textElement.id}>
      <p
        className={`text-${textElement.align} text-xl font-bold`}
        style={{ ...componentStyle }}
      >
        {textElement.text}
      </p>
    </div>
  );
};

export { TextComponent };
