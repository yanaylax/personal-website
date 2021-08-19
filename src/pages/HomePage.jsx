import React from "react";
import Card from "../components/card/Card";

import CardList from "./components/card-list/CardList";
import DevBox from "./components/dev-box/DevBox";

export default function HomePage() {
  return (
    <div className="home_page">
      <DevBox />
      <CardList />
    </div>
  );
}
