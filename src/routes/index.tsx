import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UsersRoutes from './UsersRoutes'
import PostsRoutes from './PostsRoutes'
import Top from '../components/pages/Top'
import Page404 from '../components/pages/Page404'

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
      <Route path="/" exact component={Top} />
      <Route path="*" component={Page404} />
    </Switch>
  )
}

export default index
