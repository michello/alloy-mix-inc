import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import BaseLayout from './BaseLayout';
import routes from './routes';

const App = () => {
  const { pathname } = useLocation();
  return(
    <BaseLayout>
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        {routes.map(route => (
          <Route
            key={route.path}
            exact path={route.path}
            render={(props) => (
              <route.component {...props}/>
            )
          }/>
        ))}
      </Switch>
    </BaseLayout>
  )
}

export default App;