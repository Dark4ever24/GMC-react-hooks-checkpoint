import React from "react";
import "./App.css";
import {Route} from "react-router-dom";
import Description from "./Components/Description"
import Home from "./Components/Home";

export const App = () => {
  return (
    <div className='App'>
      <Route exact path="/" component={Home} />
      <Route path="/Description/:title" component={Description}/>
    </div>
  );
};

export default App;