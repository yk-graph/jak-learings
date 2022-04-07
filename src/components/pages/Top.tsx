import React from 'react'
import SearchInput from '../../components/molecules/SearchInput'
import styled from 'styled-components'

const Top: React.FC = () => {
  return (
    <SContainer>
      <h1>React PlayGround!!</h1>
      <SearchInput />
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`

export default Top
