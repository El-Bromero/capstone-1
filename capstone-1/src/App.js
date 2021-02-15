import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
  
          <Route exact path ="/">
            <NavBar/>
            <Home/>
          </Route>
  
          <Route path ="/about-us">
            {/* <AboutUs/> */}
            <NavBar/>
            <AboutUs/>
          </Route>

          <Route path ="/checkout">
            {/* <Cart/> */}
            <NavBar/>
            <Checkout />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
