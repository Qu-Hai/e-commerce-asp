import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import Login from "./pages/Login";
import { PATH } from "./constants/path";
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
  const [role, setRole] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={PATH.LOGIN} component={Login} />
            {role ? <UserLayout /> : <AdminLayout />}
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
