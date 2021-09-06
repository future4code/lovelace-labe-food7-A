import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";
import React from "react";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export default App;
