import navLinks from '@data/navLinks'

import NavItem from '@components/nav/NavItem'
import styled from 'styled-components'

const NavList = () => {
  return (
    <NavListWrapper>
      {navLinks.map((navLink) => (
        <NavItem key={navLink.id} navLink={navLink} />
      ))}
    </NavListWrapper>
  )
}

const NavListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`

export default NavList
