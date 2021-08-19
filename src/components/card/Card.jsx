import React from "react";
import CardContent from "./components/CardContent";
import CardTitle from "./components/CardTitle";

import "./card.scss";

export default function Card({ title, text }) {
  return (
    <div className="card">
      <CardTitle title="Card" />
      <CardContent text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    </div>
  );
}
