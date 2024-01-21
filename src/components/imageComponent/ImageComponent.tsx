import React from "react";
import { ImgType } from "../../types";

const ImageComponent: React.FC<ImgType> = ({ src, id = "123" }) => {
  const componentStyle: React.CSSProperties = {
    maxWidth: "100%",
    maxHeight: "366px",
  };

  return (
    <div id={id}>
      <img src={src} alt={`Image ${id}`} style={{ ...componentStyle }} />
    </div>
  );
};

export { ImageComponent };
