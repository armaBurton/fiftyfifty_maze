import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";

const Navbar = () => {
  return (
    <Router>
      <div>Nav Menu</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </Router>
  );
};

export default Navbar;
