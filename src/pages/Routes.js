import React from "react";
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Library from "./Library";

function Routes(){

  return(
    <main>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/library" component={ Library } />
      </Switch>
    </main>
  )
}

export default Routes;