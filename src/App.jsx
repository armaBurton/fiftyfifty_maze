//github.com/Xinecraft/react-maze-generator
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import "./index.css";
import "./App.css";
import TwoByTwo from "./TwoByTwo/TwoByTwo";
import ThreeByThree from "./ThreeByThree/ThreeByThree";
import FiveByFive from "./FiveByFive/FiveByFive";
import Home from "./views/Home/Home";
// import { size } from "./utils/utils";
import TitleBlock from "./views/TitleBlock/TitleBlock";
// import Labyrinth from "./views/Labyrinth/Labyrinth";
import Navbar from "./views/Navbar/Navbar";

// const Home = () => {};
// const FiveByFive = () => {};

function App() {
  // const url = window.location.href;
  return (
    <>
      <TitleBlock />
      <Router>
        <div className="appContainer">
          <Navbar />
          {/* Define Routes */}
          <div className="contentContainer">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/2x2" element={<TwoByTwo />} />
              <Route path="/3x3" element={<ThreeByThree />} />
              <Route path="/5x5" element={<FiveByFive />} />
            </Routes>
          </div>
        </div>{" "}
      </Router>
    </>
    // <main>

    // //   <section className="mazeSection">
    // //     <Labyrinth size={{ size }} />
    // //   </section>
    // // </main>
  );
}

export default App;
