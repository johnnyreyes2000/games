import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Brickpong from "./games/brickpong";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Brickpong />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;




