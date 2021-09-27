import './App.css';
import Portafolio from "./pages/Portafolio";
import Error404 from './pages/Error404';
import Home from './pages/Home';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Portafolio">
          <Portafolio />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
