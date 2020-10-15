import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import PokeList from "./Component/PokeList"
import PokeSingle from "./Component/PokeSingle"

function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route path={"/"} exact component ={PokeList}/>
        <Route path={"/pokemon/:pokemon"} exact component ={PokeSingle}/>
      </Switch>
    </div>
  );
}

export default App;
