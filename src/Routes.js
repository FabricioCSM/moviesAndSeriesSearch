import React from "react";
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Library from "./pages/Library";

function Routes(){

  return(
    <main>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/library" component={ Library } />
        {/* <Route exact path="/profile" component={ Library } /> */}
      </Switch>
    </main>
  )
}

export default Routes;