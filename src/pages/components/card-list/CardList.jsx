import React from "react";
import Card from "../../../components/card/Card";
import "./card-list.scss";

export default function CardList() {
  return (
    <div className="card_list">
      <Card />
      <Card />
      <Card />
    </div>
  );
}
