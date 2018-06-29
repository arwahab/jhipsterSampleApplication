import * as React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TaskMySuffix from './task-my-suffix';
import TaskMySuffixDetail from './task-my-suffix-detail';
import TaskMySuffixUpdate from './task-my-suffix-update';
import TaskMySuffixDeleteDialog from './task-my-suffix-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TaskMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TaskMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TaskMySuffixDetail} />
      <ErrorBoundaryRoute path={match.url} component={TaskMySuffix} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={TaskMySuffixDeleteDialog} />
  </>
);

export default Routes;
