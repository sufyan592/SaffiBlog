import React from "react";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <section className="nav">
        <div className="nav-wrapper section-spacing">
          <div className="nav-left">
            <h3>SaffiTech</h3>
          </div>
          <div className="nav-right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/create">Create</NavLink>
            </li> */}
            <li>
              <NavLink to="/signin">Signin</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
