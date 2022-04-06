import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { UsersType } from '../../types/UsersType'

const UserShow: React.FC = () => {
  const { state } = useLocation()
  const history = useHistory()
  const [user] = useState(state as UsersType)

  useEffect(() => {
    if (!state) history.push('/users')
  }, [history, state])

  return (
    <>
      <h2>User詳細ページです</h2>
      {state ? (
        <table>
          <thead>
            <tr>
              <th>ユーザーID</th>
              <th>名前</th>
              <th>Email</th>
              <th>website</th>
              <th>会社名</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        history.push('/users')
      )}
    </>
  )
}

export default UserShow
