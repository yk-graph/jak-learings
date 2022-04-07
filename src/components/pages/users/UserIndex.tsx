import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { UsersType } from '../../../types/UsersType'
import UserCard from '../../organisms/user/UserCard'
import styled from 'styled-components'

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
      <SContainer>
        <SUserCard>
          {users &&
            users.map((user) => (
              <Link
                to={{ pathname: `users/${user.id}`, state: user }}
                key={user.id}
              >
                <UserCard user={user} />
              </Link>
            ))}
        </SUserCard>
      </SContainer>
    </div>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`
const SUserCard = styled.div`
  padding-bottom: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`

export default UserIndex
