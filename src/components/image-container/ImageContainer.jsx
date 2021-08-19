import React from "react";
import "./image-container.scss";

export default function ImageContainer({ image, imageAlt }) {
  return <img src={image} alt={imageAlt} />;
}
