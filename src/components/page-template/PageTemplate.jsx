import React from "react";
import NavBar from "../nav/NavBar";
import "./page-template.scss";
export default function PageTemplate(props) {
  return (
    <div className="page_template">
      <NavBar />
      {props.children}
    </div>
  );
}
