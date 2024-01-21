# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

The thinking process:

- Initially, a desktop page with a center button for importing the first jsonFile;
- According to the JSON file shown in the project, I can assume that it will be an array of pages, with it's name on top. By iterating each element of this array through a map function, I can make a Carousel of those elements.
- Each page element has it's own blocks, which means that I can mount them in a vertical line (flex-direction: column), through the same process of mounting item by item through a map function.
- These pages are mostly composed by elements with 4 different `type` properties and an ID: Text, Img, Button and List.

- For Text, we have the following properties: text (it's the content), color (color of the font), and align (for positioning the text).
- For Img, we have only it's src.
- For Button, we have: text (button content), color (font), and bgColor (hex of the fill for the button)
- For the List, we have: an array of items that contain a SRC, a title, and a description.

- In the creating process, I will create the elements' structures (types and components), and mount it in one page mock at first and make sure it fits all the alignments.
- I will use the provided list as an secondary mock, and once the code is fully functional (structure wise), I will remove the mock and import the files item by item.

Other technicalities:

- From my point of view, a SSR structure is not necessary, once we will import documents that come from the client-side.
- A useEffect encapsulation can be good enough for the rendering each change in the process, in way that it won't be necessary to refresh again the whole page, but just it's changes.

- It's important to have a error treatment for the case of invalid JSON file structures.
