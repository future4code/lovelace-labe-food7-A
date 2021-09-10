import { createGlobalStyle } from "styled-components";
import Router from "./routes/Router";
import React, { useContext, useEffect } from "react";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import GlobalContext from "./global/GlobalContext";

function App() {
  const {
    requests: { getActiveOrder },
  } = useContext(GlobalContext);

  useEffect(() => {
    getActiveOrder();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
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
