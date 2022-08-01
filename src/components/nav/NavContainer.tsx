import React from 'react'
import styled, { css } from 'styled-components'

import NavList from '@components/nav/NavList'

const NavContainer = ({ menuVisilbe }: { menuVisilbe: boolean }) => {
  return (
    <NavContainerWrapper menuVisilbe={menuVisilbe}>
      <NavList />
    </NavContainerWrapper>
  )
}
const NavContainerWrapper = styled.nav<{ menuVisilbe: boolean }>`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.bgColors.main};
  ${({ menuVisilbe }) =>
    menuVisilbe
      ? css`
          animation: openSlideMenu 1s forwards;
        `
      : css`
          animation: closeSlideMenu 1s forwards;
        `}
`

export default NavContainer
