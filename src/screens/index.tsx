import React from 'react';
import { Switch,Route,Redirect} from 'react-router-dom';

import { AuthenticationStatus } from '../redux/reducers/auth';
import { OnlyWith } from '../components';
import { routes } from "../utils";
import Dashboard from './Dashboard';
import Login from './Auth/Login';
import ResetPassword from './Auth/ResetPassword';
import UserRegistration from './Auth/UserRegistration';
import ForgotPassword from './Auth/ForgotPassword';

const Screens: React.FC = () => (
  <>
    <OnlyWith status={AuthenticationStatus.AUTHENTICATED}>
      <Switch>
        <div>Hiii AUTHENTICATED Developer</div>
      </Switch>
    </OnlyWith>
    <OnlyWith status={AuthenticationStatus.NOT_AUTHENTICATED}>
      <Switch>
          <Route path={routes.login} component={Login} />
          <Route path={routes.userRegister} component={UserRegistration} />
          <Route path={routes.forgotPassword} component={ForgotPassword} />
          <Route path={routes.resetPassword} component={ResetPassword} />
          <Route path={routes.dashboard} component={Dashboard} />
          <Route component={() => <Redirect to={routes.login} />} />
      </Switch>
    </OnlyWith>
  </>
);

export default Screens;
