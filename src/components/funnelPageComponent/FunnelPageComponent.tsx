import React from "react";
import {
  ButtonType,
  Funnel,
  FunnelPage,
  ImageType,
  ListItem,
  TextType,
} from "../../types";
import { TextComponent } from "../textComponent/TextComponent";
import { ImageComponent } from "../imageComponent/ImageComponent";
import { ButtonComponent } from "../buttonComponent/ButtonComponent";
import { ListComponent } from "../listComponent/ListComponent";

interface FunnelComponentProps {
  funnel: Funnel;
}

const FunnelComponent: React.FC<FunnelComponentProps> = ({ funnel }) => {
  const baseStyles: React.CSSProperties = {
    width: "375px",
    height: "600px",
    overflowY: "scroll",
    overflowX: "hidden",
    border: "15px solid #333",
    padding: "30px 5px",
    marginTop: "60px",
    borderRadius: "25px",
  };

  const logoELement: ImageType = {
    id: "logoId",
    src: "https://perspective.imgix.net/assets/app/logo/256x256.png?auto=compress&dpr=2",
    type: "image",
  };

  return (
    <div
      className="flex items-center flex-col p-5"
      style={{ backgroundColor: funnel.bgColor }}
    >
      <h1 className="text-black">{funnel.name}</h1>
      <div className="flex flex-col items-center" style={{ ...baseStyles }}>
        <div style={{ width: "70px" }}>
          <ImageComponent imgElement={logoELement} />
        </div>
        {funnel.pages.map((page) => (
          <FunnelPageComponent key={page.id} page={page} />
        ))}
      </div>
    </div>
  );
};

interface FunnelPageComponentProps {
  page: FunnelPage;
}

const FunnelPageComponent: React.FC<FunnelPageComponentProps> = ({ page }) => {
  return (
    <>
      {page.blocks.map((block) => {
        switch (block.type) {
          case "text":
            return (
              <TextComponent key={block.id} textElement={block as TextType} />
            );
          case "image":
            return (
              <ImageComponent key={block.id} imgElement={block as ImageType} />
            );
          case "button":
            return (
              <ButtonComponent
                key={block.id}
                buttonElement={block as ButtonType}
              />
            );
          case "list":
            return <ListComponent key={block.id} list={block as ListItem} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export { FunnelComponent };
