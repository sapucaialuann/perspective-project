import React from "react";
import { ImageType, ListItem, ListItemType } from "../../types";
import { ImageComponent } from "../imageComponent/ImageComponent";

interface ListItemProps {
  listItem: ListItemType;
}

interface ListComponentProps {
  list: ListItem;
}

const ListItemElement: React.FC<ListItemProps> = ({ listItem }) => {
  const imgItemPropsComponent: ImageType = {
    id: listItem.description,
    src: listItem.src,
    type: "image",
  };

  return (
    <div className="flex flex-col items-center" key={listItem.title}>
      <h3 className="text-black text-xl pt-3">{listItem.title}</h3>
      <div className="w-2/5">
        <ImageComponent imgElement={imgItemPropsComponent} />
      </div>
      <p className="text-black pb-2">{listItem.description}</p>
    </div>
  );
};

const ListComponent: React.FC<ListComponentProps> = ({ list }) => {
  return (
    <div>
      {list.items.map((item) => (
        <ListItemElement key={item.title} listItem={item} />
      ))}
    </div>
  );
};

export { ListComponent };
