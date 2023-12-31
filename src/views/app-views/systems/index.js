import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Systems = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/settings`} component={lazy(() => import(`./settings`))} />
      <Route path={`${match.url}/mobile_app`} component={lazy(() => import(`./mobile_app`))} />
      <Route path={`${match.url}/logs`} component={lazy(() => import(`./logs_component`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/settings`} />
    </Switch>
  </Suspense>
);

export default Systems;