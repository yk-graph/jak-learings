import React from 'react'
import { useParams } from 'react-router-dom'

const PostShow: React.FC = () => {
  const params = useParams()
  console.log(params) // -> {id: '1'} が取得できる
  return <h2>投稿の詳細ページ</h2>
}

export default PostShow
