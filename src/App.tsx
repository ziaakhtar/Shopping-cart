// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./app/store";
import theme from "./styles";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import OrderPlacementPopup from "./components/OrderPlacementPopup";
import { Login, Register } from "./components/Auth";
import { makeStyles } from "@mui/material/styles";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/cart" Component={Cart} />
            <Route path="/product/:productId" Component={ProductDetails} />
            <Route path="/" Component={Home} />
          </Switch>
        </Router>
        <OrderPlacementPopup />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
