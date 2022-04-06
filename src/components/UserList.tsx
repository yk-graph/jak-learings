import React from 'react'
import { useHistory } from 'react-router-dom'
import { UsersType } from '../types/UsersType'

interface Props {
  user: Pick<UsersType, 'id' | 'name'>
}

const PostList: React.FC<Props> = (props) => {
  const { id, name } = props.user
  const history = useHistory()

  const toShowPage = () =>
    history.push({ pathname: `/users/${id}`, state: props.user })

  return (
    <li onClick={toShowPage}>
      No.{id}
      <div>名前：{name}</div>
    </li>
  )
}

export default PostList
