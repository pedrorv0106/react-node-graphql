import React from 'react';
import loadable from '@loadable/component';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';

import ROUTES from 'config/routes';
import GlobalStyles from 'components/Styled/GlobalStyles';
import NotFound from 'screens/NotFound';
import useModalRoute from 'utils/useModalRoute';

const Home = loadable(() => import('screens/Home'));
const Onboarding = loadable(() => import('screens/Onboarding'));
const AdminRooms = loadable(() => import('screens/Admin/Rooms'));
const AdminLogin = loadable(() => import('screens/Admin/Login'));

const App = () => {
  const { location } = useModalRoute([
    ROUTES.LOGIN,
    ROUTES.AVATAR,
    ROUTES.CONFIRM,
  ]);

  return (
    <React.Fragment>
      <GlobalStyles />

      <Switch location={location}>
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.ADMIN_LOGIN} component={AdminLogin} />
        <Route path={ROUTES.ADMIN_ROOMS} component={AdminRooms} />
        <Route component={NotFound} />
      </Switch>

      {/* Modal routes */}
      <Route path={ROUTES.ONBOARDING} component={Onboarding} />
    </React.Fragment>
  );
};

export default hot(module)(App);
