import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";
import PlantList from  "./components/PlantList";
import PrivateRoute from "./utils.js/PrivateRoute";
import { PlantContext } from "./contexts/PlantContext"; 


function App() {

  


  return (
    <>
      {/* <PlantContext.Provider value={{plants, setPlants}}> */}
      <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component = {SignUp} />
      
          <PrivateRoute exact path="/protected" component={PlantList} />
        </Switch>
        {/* </PlantContext.Provider> */}
    </>
  );
}

export default App;
