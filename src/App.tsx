import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import Routes from './routes'
import './App.css'

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
      <Routes />
    </BrowserRouter>
  )
}

export default App
