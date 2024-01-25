import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AuthenticationStatus } from "../redux/reducers/auth";
import { OnlyWith } from "../components";
import { routes } from "../utils";
import Dashboard from "./Dashboard";
import Login from "./Auth/Login";
import ResetPassword from "./Auth/ResetPassword";
import UserRegistration from "./Auth/UserRegistration";
import ForgotPassword from "./Auth/ForgotPassword";
import Profile from "./profile";

const Screens: React.FC = () => (
  <>
    <OnlyWith status={AuthenticationStatus.NOT_AUTHENTICATED}>
      <Switch>
        <Route path={routes.login} component={Login} />
        <Route path={routes.forgotPassword} component={ForgotPassword} />
        <Route path={routes.resetPassword} component={ResetPassword} />
        <Route path={routes.userRegister} component={UserRegistration} />
        <Route path={routes.dashboard.root} component={Dashboard} />
        <Route path={routes.profile} component={Profile} />
      </Switch>

      {/* <Route component={() => <Redirect to={routes.login} />} /> */}
    </OnlyWith>

    <OnlyWith status={AuthenticationStatus.AUTHENTICATED}></OnlyWith>
  </>
);

export default Screens;
