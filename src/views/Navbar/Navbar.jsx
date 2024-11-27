import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <ul className="navLinks">
        {/* Menu */}
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/2x2">
            2x2 Maze
          </Link>
        </li>
        <li>
          <Link className="links" to="/3x3">
            3x3 Maze
          </Link>
        </li>
        <li>
          <Link className="links" to="/5x5">
            5x5 Maze
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
