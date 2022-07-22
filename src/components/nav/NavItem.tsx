import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { NavLinkType } from '@data/navLinks'

const NavItem = ({ navLink }: { navLink: NavLinkType }) => {
  const router = useRouter()

  return (
    <NavItemWrapper>
      <Link href={navLink.link}>
        <NavLinkTitle
          className="navLink-title"
          isActive={navLink.link === router.pathname ? true : false}
        >
          {navLink.title}
        </NavLinkTitle>
      </Link>
    </NavItemWrapper>
  )
}

const NavItemWrapper = styled.li`
  padding: 1rem 2rem 1rem 0;

  .navLink-title {
  }
`

const NavLinkTitle = styled.h4<{ isActive: boolean }>`
  color: ${({ theme, isActive }) => (isActive ? theme.fontColor : 'darkGray')};
  font-size: 1.2rem;
  letter-spacing: 0.3rem;

  &:hover {
    color: ${({ theme }) => theme.fontColor};
  }
  cursor: pointer;
`

export default NavItem
