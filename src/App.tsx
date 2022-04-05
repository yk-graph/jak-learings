import React from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import PostIndex from './pages/posts/PostIndex'
import UserIndex from './pages/users/UserIndex'
// import UserShow from './pages/users/UserShow'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">TOPページ</Link>
        <br />
        <Link to="/users">ユーザー一覧</Link>
        <br />
        <Link to="/posts">ポスト一覧</Link>
      </div>
      <Switch>
        <Route exact path="/users">
          <UserIndex />
        </Route>
        <Route exact path="/posts">
          <PostIndex />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
