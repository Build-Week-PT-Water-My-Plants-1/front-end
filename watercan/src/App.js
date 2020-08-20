import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component = {SignUp} />
    </Switch>
  );
}

export default App;
