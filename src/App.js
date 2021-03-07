import React from 'react';
import { Route, Switch } from 'react-router-dom'
import BaseLayout from './BaseLayout';
import routes from './routes';

const App = () => {
  return(
    <BaseLayout>
      <Switch>
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