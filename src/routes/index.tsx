import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UserIndex from '../pages/users/UserIndex'
import UserShow from '../pages/users/UserShow'
import UserAvatarIndex from '../pages/users/UserAvatarIndex'
import PostIndex from '../pages/posts/PostIndex'

const index: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/users"
        render={({ match: { url } }) => (
          <Switch>
            <Route exact path={url} component={UserIndex} />
            <Route path={`${url}/show`} component={UserShow} />
            <Route path={`${url}/avatars`} component={UserAvatarIndex} />
          </Switch>
        )}
      />
      <Route path="/posts" render={() => <PostIndex />} />
    </Switch>
  )
}

export default index
