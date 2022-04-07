import React from 'react'
import styled from 'styled-components'
import { UsersType } from '../../../types/UsersType'
import Card from '../../atoms/card/Card'
import UserIconWithName from '../../molecules/user/UserIconWithName'

interface Props {
  user: UsersType
}

const UserCard: React.FC<Props> = ({ user }) => {
  return (
    <Card>
      <UserIconWithName
        image="https://source.unsplash.com/1QsQRkxnU6I"
        name={user.name}
      />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  )
}

const SDl = styled.dl`
  text-align: left;
  margin: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`

export default UserCard
