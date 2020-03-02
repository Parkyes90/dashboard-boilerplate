import React, { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';

function App(): ReactElement {
  return (
    <Switch>
      <Route path="/main" component={(): ReactElement => <div>Main</div>} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  );
}

export default App;
