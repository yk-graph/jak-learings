import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UsersRoutes from './UsersRoutes'
import PostsRoutes from './PostsRoutes'

const index: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/users"
        render={({ match: { url } }) => (
          <Switch>
            {UsersRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exaxt}
                path={`${url}${route.path}`}
                component={route.component}
              />
            ))}
          </Switch>
        )}
      />
      <Route
        path="/posts"
        render={({ match: { url } }) => (
          <Switch>
            {PostsRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exaxt}
                path={`${url}${route.path}`}
                component={route.component}
              />
            ))}
          </Switch>
        )}
      />
    </Switch>
  )
}

export default index
