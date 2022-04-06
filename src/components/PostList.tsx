import React from 'react'
import { Link } from 'react-router-dom'
import { PostsType } from '../types/PostsType'

interface Props {
  post: PostsType
}

const PostList: React.FC<Props> = (props) => {
  const { id, title, body } = props.post
  return (
    <Link to={{ pathname: `/posts/${id}`, state: props.post }}>
      <li>
        <h4>
          No.{id}: {title}
        </h4>
        <div>{body}</div>
      </li>
    </Link>
  )
}

export default PostList
