import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./pages/Homepage/index";
const  App= (props) =>{

  return (
    <Router>
      <Route exact path= "/" component = {HomePage}/>
    </Router>
  )
}


export const App;