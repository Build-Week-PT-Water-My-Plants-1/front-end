import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";
import PlantList from  "./components/PlantList";
import PrivateRoute from "./utils.js/PrivateRoute";
import { PlantContext } from "./contexts/PlantContext"; 
import { UserContext } from "./contexts/UserContext";
import flowers from "../src/images/Flowers.jpg"


function App() {

  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [userId, setUserId] = useState(123);


  return (
    <>
      <PlantContext.Provider value={{plants, setPlants, isLoading, setIsLoading}}>
        <UserContext.Provider value={{userId, setUserId}}>
        <Nav />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component = {SignUp} />
        
            <PrivateRoute exact path="/protected" component={PlantList} />
          </Switch>
          
          <img src={flowers} alt='flowers' height='350px'/>
          </UserContext.Provider>
        </ PlantContext.Provider>
    </>
  );
}

export default App;
