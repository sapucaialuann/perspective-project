import React from "react";
import { ListType } from "../../types";
import { ImageComponent } from "../imageComponent/ImageComponent";

const ListItem: React.FC<{ item: ListType["items"][0] }> = ({ item }) => (
  <div key={item.title}>
    <h3>{item.title}</h3>
    <ImageComponent src={item.src} id={item.title} type="image" />
    <p>{item.description}</p>
  </div>
);

const ListComponent: React.FC<ListType> = ({ items = [], id = "123" }) => (
  <div id={id}>
    {items.map((item) => (
      <ListItem key={item.title} item={item} />
    ))}
  </div>
);

export { ListComponent };
