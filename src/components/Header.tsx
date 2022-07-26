import React, { useState } from 'react'
import styled from 'styled-components'

import SunIcon from '#static/images/sun_icon.svg'
import MoonIcon from '#static/images/moon_icon.svg'
import MenuIcon from '#static/images/menu_icon.svg'
import CloseIcon from '#static/images/close_icon.svg'

import NavContainer from '@components/nav/NavContainer'
import Link from 'next/link'

const Header = ({ themeMode, handleThemeMode }) => {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenuVisible = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <HeaderWrapper>
      <DivideWrapper>
        <Link href={'/'}>
          <HeaderLogo>JungJin</HeaderLogo>
        </Link>
        <ButtonWrapper>
          <button onClick={handleThemeMode}>
            {themeMode === 'light' ? <StyledSunIcon /> : <StyledMoonIcon />}
          </button>
          <button onClick={toggleMenuVisible}>
            {!menuVisible ? <StyledMenuIcon /> : <StyledCloseIcon />}
          </button>
        </ButtonWrapper>
      </DivideWrapper>
      {menuVisible && (
        <DivideWrapper>
          <NavContainer />
        </DivideWrapper>
      )}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.bgColors.main};
`
const HeaderLogo = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  cursor: pointer;
`

const DivideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`

const StyledSunIcon = styled(SunIcon)`
  font-size: 2.2rem;
`

const StyledMoonIcon = styled(MoonIcon)`
  font-size: 1.8rem;
`

const StyledMenuIcon = styled(MenuIcon)`
  font-size: 3.2rem;
`

const StyledCloseIcon = styled(CloseIcon)`
  font-size: 3.2rem;
`

export default Header
