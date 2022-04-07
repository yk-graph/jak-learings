import React from 'react'
import Header from '../atoms/layout/Header'

const HeaderOnly: React.FC = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default HeaderOnly
