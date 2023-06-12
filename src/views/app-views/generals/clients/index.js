import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Clients = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/clients_list`} />
      <Route path={`${match.url}/clients_list`} component={lazy(() => import(`./clients_list`))} />
    </Switch>
  </Suspense>
);

export default Clients;