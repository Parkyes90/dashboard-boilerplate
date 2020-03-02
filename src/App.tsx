import React, { ReactElement, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

function App(): ReactElement {
  return (
    <Switch>
      <Route
        path="/main"
        component={lazy(() => import('components/pages/Main'))}
      />
      <Route
        path="/sign-in"
        component={lazy(() => import('components/pages/SignIn'))}
      />
      <Route
        path="/sign-up"
        component={lazy(() => import('components/pages/SignUp'))}
      />
    </Switch>
  );
}

export default App;
