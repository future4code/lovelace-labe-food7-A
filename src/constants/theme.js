import { createTheme } from "@material-ui/core/styles";
import { primaryColor, neutralColor } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black",
    },
    text: {
      primary: neutralColor,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        fontSize: "16px",
      },
    },
  },
});

export default theme;
