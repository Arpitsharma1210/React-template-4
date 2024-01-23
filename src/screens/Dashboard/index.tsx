import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DashboardMain from "./dashboard";
import { routes } from "../../utils";

const Dashboard = () => {
  return (
    <Switch>
      <Route path={routes.dashboard} component={DashboardMain} />
      <Route path="*" component={() => <Redirect to={routes.dashboard} />} />
    </Switch>
  );
};

export default Dashboard;
