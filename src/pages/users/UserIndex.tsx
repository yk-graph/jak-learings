import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UsersType } from '../../types/UsersType'

const UserIndex: React.FC = () => {
  const [users, setUsers] = useState<UsersType[]>()
  useEffect(() => {
    axios
      .get<UsersType[]>('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => setUsers(data))
      .catch((error) => alert(error))
  }, [])
  return (
    <div>
      <h2>User一覧ページです</h2>
      <nav>
        <Link to="/users/show">ユーザーの詳細画面へ</Link>
        <br />
        <Link to="/users/avatars">ユーザーのアバター一覧画面へ</Link>
      </nav>
      <h2>投稿情報一覧</h2>
      {users ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>投稿のの情報が取得できていません</p>
      )}
    </div>
  )
}

export default UserIndex
