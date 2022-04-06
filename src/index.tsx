import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import { BrowserRouter, Link } from 'react-router-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
