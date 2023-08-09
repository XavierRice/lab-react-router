import React from "react";
import "./Nav.css";
import {  Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <article>
        <Link to="/" >
          <h1>
            <a>
              Northwest <span>Animal Hospital</span>
            </a>
          </h1>
        </Link>
      </article>
      <aside>
        <ul>
          <Link to="/StaffList" >
            <li>
              <a>All Staff</a>
            </li>
          </Link>
          <Link to="/PetsList" >
          <li>
            <a>All Pets</a>
          </li>
        </Link>
      </ul>
    </aside>
    </header >
  );
}

export default Nav;
