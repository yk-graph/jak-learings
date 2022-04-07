import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostList from '../../PostList'
import { PostsType } from '../../../types/PostsType'

const PostIndex: React.FC = () => {
  const [posts, setPosts] = useState<PostsType[]>()
  useEffect(() => {
    axios
      .get<PostsType[]>('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => setPosts(data))
      .catch((error) => alert(error))
  }, [])
  return (
    <>
      <h2>投稿情報一覧</h2>
      {posts ? (
        <ul>
          {posts.map((post) => (
            <PostList key={post.id} post={post} />
          ))}
        </ul>
      ) : (
        <p>投稿のの情報が取得できていません</p>
      )}
    </>
  )
}

export default PostIndex
