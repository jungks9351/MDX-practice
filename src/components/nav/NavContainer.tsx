import styled from 'styled-components'

import NavList from '@components/nav/NavList'
import { slideOut, slideIn } from '@styles/animations'

interface NavContainerProps {
  animation: boolean
  toggleOpenModal: () => void
}

const NavContainer = ({ animation, toggleOpenModal }: NavContainerProps) => {
  return (
    <NavContainerWrapper animation={animation}>
      <NavList toggleOpenModal={toggleOpenModal} />
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
