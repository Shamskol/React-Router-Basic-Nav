import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (

<div className="App">
    <Navigation />
<Switch>
    <Route exact path="/">
          <Home />
        </Route>

        <Route   exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>
        </Switch>

  </div>
  
);

  }

export default App;
