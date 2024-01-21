import "./App.css";
import { ButtonComponent } from "./components/buttonComponent/ButtonComponent";
import { ImageComponent } from "./components/imageComponent/ImageComponent";
import { ListComponent } from "./components/listComponent/ListComponent";
import { TextComponent } from "./components/textComponent/TextComponent";

function App() {
  const imageUrl =
    "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80";

  const list = [
    {
      title: "Drinks",
      description: "Tshhh... Ahhhhh!",
      src: "https://img.icons8.com/0076FF/win10/247/kawaii-soda",
    },
    {
      title: "Icecream",
      description: "Cool down ...",
      src: "https://img.icons8.com/0076FF/win10/247/kawaii-cupcake",
    },
    {
      title: "Taccos",
      description: "... to heat up",
      src: "https://img.icons8.com/0076FF/win10/247/kawaii-taco",
    },
  ];
  return (
    <>
      <div>
        <TextComponent
          id="123123"
          align="center"
          color="white"
          type="text"
          text="teste"
        />

        <ButtonComponent
          bgColor="#000"
          color="white"
          text="teste de botão"
          type="button"
          id="123456"
        />

        <ImageComponent id="123444" src={imageUrl} type="image" />

        <ListComponent items={list} id="54645" type="list" />
      </div>
    </>
  );
}

export default App;
