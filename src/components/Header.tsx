import React from 'react'
import styled from 'styled-components'
import NavContainer from './nav/NavContainer'

const Header = () => {
  return (
    <HeaderWrapper>
      <NavContainer />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  padding: 2rem 0;
`

export default Header
