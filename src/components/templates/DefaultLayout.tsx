import React from 'react'
import Footer from '../atoms/layout/Footer'
import Header from '../atoms/layout/Header'

const DefaultLayout: React.FC = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
