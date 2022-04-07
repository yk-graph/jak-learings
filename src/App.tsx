import React from 'react'
import PrimaryButton from './components/atoms/button/PrimaryButton'
import SecondaryButton from './components/atoms/button/SecondaryButton'

const App: React.FC = () => {
  return (
    <>
      <h1>React PlayGround!!</h1>
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>test</SecondaryButton>
    </>
  )
}

export default App
