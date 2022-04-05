import React from 'react'
import { Link } from 'react-router-dom'
const UserIndex: React.FC = () => {
  return (
    <div>
      <h2>User一覧ページです</h2>
      <nav>
        <Link to="/users/show">ユーザーの詳細画面へ</Link>
        <br />
        <Link to="/users/avatars">ユーザーのアバター一覧画面へ</Link>
      </nav>
    </div>
  )
}

export default UserIndex
