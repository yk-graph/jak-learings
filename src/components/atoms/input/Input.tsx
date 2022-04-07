import React from 'react'
import styled from 'styled-components'

interface Props {
  placeholder?: string
}

const Input: React.FC<Props> = (props) => {
  const { placeholder = '' } = props
  return <SInput type="text" placeholder={placeholder} />
}

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`

export default Input
