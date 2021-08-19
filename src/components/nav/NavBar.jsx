import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
export default function NavBar() {
  return (
    <div className="nav_bar">
      <Link to="/">Home</Link>
      {/* <div className="links">
        <Link to="/">Portfolio</Link>
        <Link to="/">Contact Me</Link>
      </div> */}
    </div>
  );
}
