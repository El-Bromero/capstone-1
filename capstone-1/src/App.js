import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './Components/NavBar';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
  
          <Route exact path ="/">
            <NavBar/>
            <Home/>
          </Route>
  
          <Route path ="/login">
            {/* <Shop/> */}
            <p>Login</p>
          </Route>
  
          <Route path ="/about-us">
            {/* <AboutUs/> */}
            <p>About Us</p>
          </Route>
  
          <Route path ="/orders">
            {/* <AboutUs/> */}
            <p>Orders</p>
          </Route>
  
          <Route path ="/checkout">
            {/* <Cart/> */}
            <NavBar/>
            <p>Checkout</p>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
