import React from 'react'
import { UsersType } from '../types/UsersType'

interface Props {
  user: Pick<UsersType, 'id' | 'name'>
}

const PostList: React.FC<Props> = (props) => {
  const { id, name } = props.user
  return (
    <li>
      No.{id}
      <div>名前：{name}</div>
    </li>
  )
}

export default PostList
