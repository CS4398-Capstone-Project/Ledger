import React from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";

// Import all the pages
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Employee from "./pages/Employee";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
import Registration from "./pages/Registration";



function App() {
  return (
    <>
      <Route exact path='/' component={Home} />
      <Route exact path='/customer' component={Customer} />
      <Route exact path='/employee' component={Employee} />
      <Route exact path='/admin' component={Admin} />
      <Route exact path='/registration' component={Registration} />

      {/* <Route component={Error} /> */}

    </>
  );
}

export default App;
