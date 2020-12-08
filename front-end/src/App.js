import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainMenu from "./components/Menu/MainMenu";
import AppBar from "./components/AppBar/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Home from "./pages/Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

function App() {
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
    typography: {
      button: {
        textTransform: "none",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <AppBar />
        <Container className="container">
          <MainMenu />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
