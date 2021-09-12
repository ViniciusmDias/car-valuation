import { Switch } from 'react-router-dom';

import { Route } from './Route';

import { Welcome } from '../pages/Welcome';
import { Model } from '../pages/Model';
import { Version } from '../pages/Version';
import { Year } from '../pages/Year';
import { Car } from '../pages/Car';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/model" component={Model} />
      <Route exact path="/year" component={Year} />
      <Route exact path="/version" component={Version} />
      <Route exact path="/car" component={Car} />
    </Switch>
  );
}
