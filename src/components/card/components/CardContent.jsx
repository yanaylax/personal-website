import React from "react";
import Button from "../../button/Button";

export default function CardContent({ text }) {
  return (
    <div className="card_content">
      <p>{text}</p>
      <Button text="click" />
    </div>
  );
}
