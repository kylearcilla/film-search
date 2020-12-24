import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { WatchList } from "./components/WatchList";
import { Watched } from "./components/Watched";
import { Home } from "./components/Home"
import './App.css';
import './lib/font-awesome/css/all.min.css'

import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/watch-list">
            <WatchList />
          </Route>
          <Route exact path="/favorites">
            <Watched />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
