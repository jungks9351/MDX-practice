import navLinks from '@data/navLinks'

import NavItem from '@components/nav/NavItem'
import styled from 'styled-components'

interface NavListProps {
  toggleOpenModal: () => void
}

const NavList = ({ toggleOpenModal }: NavListProps) => {
  return (
    <NavListWrapper>
      {navLinks.map((navLink) => (
        <NavItem
          key={navLink.id}
          navLink={navLink}
          toggleOpenModal={toggleOpenModal}
        />
      ))}
    </NavListWrapper>
  )
}

const NavListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`

export default NavList
