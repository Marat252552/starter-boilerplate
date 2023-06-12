import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/generals`} component={lazy(() => import(`./generals`))} />
        {/* <Route path={`${APP_PREFIX_PATH}/banners`} component={lazy(() => import(`./banners`))} />
        <Route path={`${APP_PREFIX_PATH}/clients`} component={lazy(() => import(`./clients`))} />
        <Route path={`${APP_PREFIX_PATH}/orders`} component={lazy(() => import(`./orders`))} />
        <Route path={`${APP_PREFIX_PATH}/banners`} component={lazy(() => import(`./banners`))} />
        <Route path={`${APP_PREFIX_PATH}/catalog`} component={lazy(() => import(`./catalog`))} /> */}
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/generals`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);