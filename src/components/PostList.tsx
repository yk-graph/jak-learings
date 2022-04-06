import React from 'react'
import { PostsType } from '../types/PostsType'

interface Props {
  post: Omit<PostsType, 'userId'>
}

const PostList: React.FC<Props> = (props) => {
  const { id, title, body } = props.post
  return (
    <li>
      <h4>
        No.{id}: {title}
      </h4>
      <div>{body}</div>
    </li>
  )
}

export default PostList
