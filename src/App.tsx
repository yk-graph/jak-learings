import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { UsersType } from './types/UsersType'
import { PostsType } from './types/PostsType'

const App: React.FC = () => {
  const [users, setUsers] = useState<UsersType[]>()
  const [posts, setPosts] = useState<PostsType[]>()
  useEffect(() => {
    axios
      .get<UsersType[]>('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => setUsers(data))
      .catch((error) => alert(error))
    axios
      .get<PostsType[]>('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => setPosts(data))
      .catch((error) => alert(error))
  }, [])

  return (
    <>
      <h2>ユーザー情報一覧</h2>
      {users ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>ユーザーの情報が取得できていません</p>
      )}
      <h2>投稿情報一覧</h2>
      {posts ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>投稿のの情報が取得できていません</p>
      )}
    </>
  )
}

export default App
