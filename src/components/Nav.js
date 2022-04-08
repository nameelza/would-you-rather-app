import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" exact>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderBoard" exact>
            Leader Board
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
