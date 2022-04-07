import React, { useState, useEffect } from 'react'
import { PostsType } from '../../../types/PostsType'
import { useLocation, useHistory } from 'react-router-dom'

const PostShow: React.FC = () => {
  const { state } = useLocation()
  const history = useHistory()
  const [post] = useState(state as PostsType)

  useEffect(() => {
    if (!state) history.push('/posts')
  }, [history, state])

  return (
    <>
      <h2>投稿の詳細ページ</h2>
      <table>
        <thead>
          <tr>
            <th>投稿者ID</th>
            <th>投稿ID</th>
            <th>タイトル</th>
            <th>本文</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{post.userId}</td>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default PostShow
