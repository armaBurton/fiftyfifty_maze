//github.com/Xinecraft/react-maze-generator
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./index.css";
import "./App.css";
import TwoByTwo from "./TwoByTwo/TwoByTwo";
import ThreeByThree from "./ThreeByThree/ThreeByThree";
import FiveByFive from "./FiveByFive/FiveByFive";
import Home from "./views/Home/Home";
import TitleBlock from "./views/TitleBlock/TitleBlock";
import Navbar from "./views/Navbar/Navbar";
import AsComplex from "./AsComplex/AsComplex";
import Resources from "./Resources/Resources";

function App() {
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
              <Route path="/asComplex" element={<AsComplex />} />
              <Route path="/resources" element={<Resources />} />
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
