import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Slide from "@mui/material/Slide";
import { SnackbarProvider } from "notistack";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Login from "./views/ui/login";

let theme = createTheme({});
theme = responsiveFontSizes(theme);

function App() {

  return (

    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={Slide}
        domRoot={document.getElementById("notification")}
      >
        <Login/>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;