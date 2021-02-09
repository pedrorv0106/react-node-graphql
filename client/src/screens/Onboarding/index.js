import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ROUTES from 'config/routes';
import Overlay from 'components/Overlay';

import Login from './Login';
import Avatar from './Avatar';
import Confirm from './Confirm';

const Onboarding = () => (
  <Overlay>
    <Switch>
      <Route path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.AVATAR} component={Avatar} />
      <Route path={ROUTES.CONFIRM} component={Confirm} />
    </Switch>
  </Overlay>
);

export default Onboarding;
