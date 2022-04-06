import React from 'react'
import { Link } from 'react-router-dom'

const Page404: React.FC = () => {
  return (
    <>
      <h1>ページが見つかりません</h1>
      <Link to="/">TOPへ戻る</Link>
    </>
  )
}

export default Page404
