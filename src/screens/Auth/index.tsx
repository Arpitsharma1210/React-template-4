import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "../../utils";
import UserRegistration from "./UserRegistration";
import AuthWrapper from "./AuthWrapper";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

const Auth = () => {
  return (
    <Switch>
      <Route path={routes.userRegister} component={UserRegistration} />
      <Route path="*">
        <AuthWrapper>
          <Switch>
            <Route path={routes.login} component={Login} />
            <Route path={routes.forgotPassword} component={ForgotPassword} />
            <Route path={routes.resetPassword} component={ResetPassword} />
            <Route path={routes.userRegister} component={UserRegistration} />
            <Route path="*" component={() => <Redirect to={routes.login} />} />
          </Switch>
        </AuthWrapper>
      </Route>
    </Switch>
  );
};

export default Auth;
