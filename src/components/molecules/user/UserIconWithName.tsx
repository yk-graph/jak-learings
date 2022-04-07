import React from 'react'
import styled from 'styled-components'

interface Props {
  image: string
  name: string
}

const UserIconWithName: React.FC<Props> = (props) => {
  const { image, name } = props
  return (
    <SContainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>名前</SName>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`
const SImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
`
const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`

export default UserIconWithName
