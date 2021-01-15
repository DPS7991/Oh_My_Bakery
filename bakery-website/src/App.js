import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import CartPage from "./pages/cart";
import { useState, createContext } from "react";

export const CartContext = createContext({
  cartItems: [],
  updateCart: () => {},
});

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems: cart, updateCart: setCart }}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/cart" component={CartPage} exact />
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
