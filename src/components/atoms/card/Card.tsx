import React from 'react'
import styled from 'styled-components'

const Card: React.FC = (props) => {
  const { children } = props

  return <SCard>{children}</SCard>
}

const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0 0 4px 2px;
  border-radius: 8px;
  padding: 16px;
`

export default Card
