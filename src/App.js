import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import { Home, About, Contact, Navigation } from "./components";

function App() {
  return (
    <div className="App">
      <Navigation/>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>
        <Switch>
          
        </Switch>
      
    </div>
  );
}
export default App;
