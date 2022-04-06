import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UserList from '../../components/UserList'
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
      <h2>下層ページへのリンク</h2>
      <nav>
        <Link to="/users/avatars">ユーザーのアバター一覧画面へ</Link>
      </nav>
      <h2>投稿情報一覧</h2>
      {users ? (
        <ul>
          {users.map((user) => (
            <UserList key={user.id} user={user} />
          ))}
        </ul>
      ) : (
        <p>投稿のの情報が取得できていません</p>
      )}
    </div>
  )
}

export default UserIndex
