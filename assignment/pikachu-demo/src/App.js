import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {
  BrowserRouter,
  Link,
  Switch 
} from "react-router-dom";
import { Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About"
import Cities from './components/Cities';

function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <p>
        <Link to="/">Home</Link>
        | 
        <Link to="/about">About</Link>   
      </p>
      <p>
        <Link to="/seattle">Seattle</Link>
        &nbsp;|&nbsp;
        <Link to="/chicago">Chicago</Link>
        &nbsp;|&nbsp;
        <Link to="/burbank">Burbank</Link>
      </p>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/:cities">
          <Cities />
        </Route>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
