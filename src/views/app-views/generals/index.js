import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Generals = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/dashboard`} component={lazy(() => import(`./dashboard`))} />
      <Route path={`${match.url}/catalog`} component={lazy(() => import(`./catalog`))} />
      <Route path={`${match.url}/orders`} component={lazy(() => import(`./orders`))} />
      <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
      <Route path={`${match.url}/banners`} component={lazy(() => import(`./banners`))} />
      <Route path={`${match.url}/banners`} component={lazy(() => import(`./banners`))} />
      <Route path={`${match.url}/promocodes`} component={lazy(() => import(`./promocodes`))} />
      <Route path={`${match.url}/offline_places`} component={lazy(() => import(`./offline_places`))} />
      <Route path={`${match.url}/employees`} component={lazy(() => import(`./employees`))} />
      <Route path={`${match.url}/distribution`} component={lazy(() => import(`./distribution`))} />
      {/* <Route path={`${match.url}/calendar`} component={lazy(() => import(`./calendar`))} /> */}
      {/* <Route path={`${match.url}/project`} component={lazy(() => import(`./project`))} /> */}
      {/* <Route path={`${match.url}/ecommerce`} component={lazy(() => import(`./e-commerce`))} /> */}
      <Redirect from={`${match.url}`} to={`${match.url}/dashboard`} />
    </Switch>
  </Suspense>
);

export default Generals;