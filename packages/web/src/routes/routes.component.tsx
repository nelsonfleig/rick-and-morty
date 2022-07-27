import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainLayout } from '../layout/main/main-layout.component';
import { routes } from './route-data';

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map(({ component: Component, path, exact }, idx) => (
        <Route
          key={idx}
          path={path}
          exact={exact}
          render={() => (
            <MainLayout>
              <Component />
            </MainLayout>
          )}
        />
      ))}
    </Switch>
  </Router>
);
