import React, { useState, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import pages
import Home from "./pages/Home/Home";
import Demo from "./pages/Demo/Demo";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/demo" component={Demo} />
      </Switch>
    </Router>
  );
}

export default App;
