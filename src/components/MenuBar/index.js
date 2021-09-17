import React from "react";
import { ContainerMenu, Button } from "./styles";

const categories = [
  "Árabe",
  "Asiática",
  "Hamburguer",
  "Italiana",
  "Sorvetes",
  "Carnes",
  "Baiana",
  "Petiscos",
  "Mexicana",
];

export default function MenuBar(props) {
  const handleClick = (category) => {
    props.setCategory(category);
  };

  return (
    <ContainerMenu>
      {categories.map((category) => (
        <Button
          key={category}
          size="small"
          active={props.activeCategory === category}
          onClick={() => handleClick(category)}
        >
          {category}
        </Button>
      ))}
    </ContainerMenu>
  );
}
