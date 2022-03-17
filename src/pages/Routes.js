import React from "react";
import { Route, Switch } from 'react-router-dom';
import Login from './Login';

function Routes(){

  return(
    <main>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </main>
  )
}

export default Routes;