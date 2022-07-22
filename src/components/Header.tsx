import React from 'react'
import styled from 'styled-components'

import SunIcon from '#static/images/sun_icon.svg'
import MoonIcon from '#static/images/moon_icon.svg'

import NavContainer from '@components/nav/NavContainer'

const Header = ({ themeMode, handleThemeMode }) => {
  return (
    <HeaderWrapper>
      <DivideWrapper>
        <HeaderLogo>JJ</HeaderLogo>
        <div>
          <button onClick={handleThemeMode}>
            {themeMode === 'light' ? <StyledSunIcon /> : <StyledMoonIcon />}
          </button>
        </div>
      </DivideWrapper>
      <DivideWrapper>
        <NavContainer />
      </DivideWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  padding: 0 2rem;

  border-bottom: 1px solid #ecedf1;
`
const HeaderLogo = styled.h1`
  font-size: 2.2rem;
`

const DivideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
`

const StyledSunIcon = styled(SunIcon)`
  font-size: 2.2rem;
`

const StyledMoonIcon = styled(MoonIcon)`
  font-size: 1.8rem;
`

export default Header
