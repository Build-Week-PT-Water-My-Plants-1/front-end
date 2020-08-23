import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";
import PlantList from  "./components/PlantList";
import PrivateRoute from "./utils.js/PrivateRoute";


function App() {
  return (
    <div>
      
      <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component = {SignUp} />
      
          <PrivateRoute exact path="/protected" component={PlantList} />
        </Switch>
    </div>
  );
}

export default App;
