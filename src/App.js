//github.com/Xinecraft/react-maze-generator
import React from "react";
import "./index.css";
import "./App.css";
import { size } from "./utils/utils";
import TitleBlock from "./views/TitleBlock/TitleBlock";
import Labyrinth from "./views/Labyrinth/Labyrinth";

function App() {
  return (
    <main>
      <header>
        <TitleBlock />
      </header>
      <section className="mazeSection">
        <Labyrinth size={{ size }} />
      </section>
    </main>
  );
}

export default App;
