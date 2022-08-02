import styled from 'styled-components'

import NavList from '@components/nav/NavList'
import { slideOut, slideIn } from '@styles/animations'

const NavContainer = ({ animation }: { animation: boolean }) => {
  return (
    <NavContainerWrapper animation={animation}>
      <NavList />
    </NavContainerWrapper>
  )
}
const NavContainerWrapper = styled.nav<{ animation: boolean }>`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.bgColors.main};
  animation: ${({ animation }) => (animation ? slideOut : slideIn)} 700ms;
  animation-fill-mode: forwards;
`

export default NavContainer
