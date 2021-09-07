import React from "react"
import { ContainerMenu } from "./styles"
import { Button } from "@material-ui/core"

export default function MenuBar(props) {

  const handleClick = (category) => {
    props.setCategory(category)
  }

  return (
    <ContainerMenu>

      <Button
        size={'small'}
        onClick={() => handleClick('Árabe')}
      >
        Árabe
      </Button>
     
      <Button
        size={'small'}
        onClick={() => handleClick('Asiática')}
      >
        Asiática
      </Button>

      <Button
        size={'small'}
        onClick={() => handleClick('Hamburguer')}
      >
        Hamburger
      </Button>

      <Button
        size={'small'}
        onClick={() => handleClick('Italiana')}
      >
        Italiana
      </Button>

      <Button
        size={'small'}
        onClick={() => handleClick('Sorvetes')}
      >
        Sorvetes
      </Button>

      <Button
        size={'small'}
        onClick={() => handleClick('Carnes')}
      >
        Carnes
      </Button>

      <Button
        size={'small'}
        onClick={() => handleClick('Baiana')}
      >
        Baiana
      </Button>

      <Button
        size={'small'}
        onClick={() => handleClick('Petiscos')}
      >
        Petiscos
      </Button>

      <Button
        size={'small'}
        onClick={() => handleClick('Mexicana')}
      >
        Mexicana
      </Button>

    </ContainerMenu>
  )
}