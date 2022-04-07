import React from 'react'
import styled from 'styled-components'

const Footer: React.FC = () => {
  return <SFooter>&copy; 2022 meetrun.inc</SFooter>
}

const SFooter = styled.header`
  background: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`
export default Footer
