import * as React from 'react';
// tslint:disable-next-line:no-unused-variable
import { Route, Switch } from 'react-router-dom';

import Pet from './pet';
import Info from './info';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <Route path={`${match.url}/pet`} component={Pet} />
      <Route path={`${match.url}/info`} component={Info} />
      {/* jhipster-needle-add-route-path - JHipster will routes here */}
    </Switch>
  </div>
);

export default Routes;
