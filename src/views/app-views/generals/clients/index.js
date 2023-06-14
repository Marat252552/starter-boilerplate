import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const ClientsList = lazy(() => import(`./clients_list`))
const Settings = lazy(() => import(`./settings`))


const Clients = ({ match }) => (
  <Suspense fallback={<Loading cover="content" />}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/clients_list`} />
      <Route exact path={`${match.url}/clients_list`} component={ClientsList} />
      <Route path={`${match.url}/clients_list/:id`} component={Settings} />
    </Switch>
  </Suspense>
);

export default Clients;