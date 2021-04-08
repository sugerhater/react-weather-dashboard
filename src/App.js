import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Homepage from "./pages/Homepage";
import ReactDOM from "react-dom";
import { StoreProvider } from "./store/GlobalState";


const App = () => {
  return (

    <Router>
      <StoreProvider>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/react-weather-dashboard" component={Homepage} />
      </StoreProvider>
    </Router>
  )
}


export default App;