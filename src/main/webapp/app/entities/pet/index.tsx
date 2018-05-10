import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Pet from './pet';
import PetDetail from './pet-detail';
import PetUpdate from './pet-update';
import PetDeleteDialog from './pet-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <Route exact path={`${match.url}/new`} component={PetUpdate} />
      <Route exact path={`${match.url}/:id/edit`} component={PetUpdate} />
      <Route exact path={`${match.url}/:id`} component={PetDetail} />
      <Route path={match.url} component={Pet} />
    </Switch>
    <Route path={`${match.url}/:id/delete`} component={PetDeleteDialog} />
  </>
);

export default Routes;
