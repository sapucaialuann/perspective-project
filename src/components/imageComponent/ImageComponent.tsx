import React from "react";
import { ImageType } from "../../types";

interface ImageTypeProps {
  imgElement: ImageType;
}

const ImageComponent: React.FC<ImageTypeProps> = ({ imgElement }) => {
  const componentStyle: React.CSSProperties = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <div
      id={imgElement.id}
      style={{
        display: "flex",
        padding: "15px",
        // border: "1px solid red",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={imgElement.src}
        alt={`Image ${imgElement.id}`}
        style={{ ...componentStyle }}
      />
    </div>
  );
};

export { ImageComponent };
