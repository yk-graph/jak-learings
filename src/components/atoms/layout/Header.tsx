import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header: React.FC = () => {
  return (
    <SHeader>
      <SLink to="/">TOPページ</SLink>
      <SLink to="/users">ユーザー一覧</SLink>
      <SLink to="/posts">ポスト一覧</SLink>
    </SHeader>
  )
}

const SHeader = styled.header`
  background: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
`
const SLink = styled(Link)`
  margin: 0 8px;
`

export default Header
