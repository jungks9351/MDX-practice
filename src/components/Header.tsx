import React from 'react'
import styled from 'styled-components'

import SunIcon from '#static/images/sun_icon.svg'
import MoonIcon from '#static/images/moon_icon.svg'

import NavContainer from '@components/nav/NavContainer'

const Header = ({ themeMode, handleThemeMode }) => {
  return (
    <HeaderWrapper>
      <NavContainer />
      <div>
        <button onClick={handleThemeMode}>
          {themeMode === 'light' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #ecedf1;
`

export default Header
