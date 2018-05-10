import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Info from './info';

const Routes = ({ match }) => (
  <>
    <Route path={match.url} component={Info} />
  </>
);

export default Routes;
