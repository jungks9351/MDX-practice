import React from 'react'
import styled from 'styled-components'

const Header = ({ children }) => {
  return <HeaderWrapper>{children}</HeaderWrapper>
}

const HeaderWrapper = styled.header`
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Header
