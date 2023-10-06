import React from "react";
import "./style.css";
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav">
      <h1 className="logo">
        Ask<span style={{ color: "var(--lightBlue)" }}>Ai.</span>
      </h1>
      <div className="links">
        <NavLink to="/" className="link">
          <p>Home</p>
        </NavLink>
        <NavLink to="/dashboard" className="link">
          {/* <Button text={"Dashboard"}/> */}
           <p>Dashboard</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
