import React, { useState, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import pages
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
