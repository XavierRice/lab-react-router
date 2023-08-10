import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <header>
      <article>
        <NavLink to="/" > Northwest <span>Animal Hospital</span> </NavLink>
      </article>
      <aside>
        <ul>
          <li>
            <NavLink to="/StaffList" ><a>All Staff</a></NavLink>
          </li>
          <NavLink to="/PetsList" ></NavLink>
          <li>
            <NavLink to="/PetsList" ><a>All Pets</a></NavLink>
          </li>
        </ul>
      </aside>
    </header >
  );
}

export default Nav;
