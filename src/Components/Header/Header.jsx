import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/simplecalc" className="nav-link">
              Simple Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to="/scientificcalc" className="nav-link">
              Scientific Calculator
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
