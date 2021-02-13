import './App.css';

import { Route, Switch } from "react-router-dom";

import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="app">
      <Switch>

        <Route exact path ="/">
          <NavBar/>
        </Route>

        <Route path ="/shop">
          {/* <Shop/> */}
          <p>Shop</p>
        </Route>

        <Route path ="/about-us">
          {/* <AboutUs/> */}
          <p>About Us</p>
        </Route>

        <Route path ="/cart">
          {/* <Cart/> */}
          <p>Cart</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
