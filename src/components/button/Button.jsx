import React from "react";
import "./button.scss";

export default function Button({ text }) {
  return (
    <div className="button_owner">
      <button>{text}</button>
    </div>
  );
}
