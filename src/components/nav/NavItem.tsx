import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { NavLinkType } from '@data/navLinks'

const NavItem = ({ navLink }: { navLink: NavLinkType }) => {
  const router = useRouter()

  return (
    <NavItemWrapper isActive={navLink.link === router.pathname ? true : false}>
      <Link href={navLink.link}>
        <h4 className="navLink-title">{navLink.title}</h4>
      </Link>
    </NavItemWrapper>
  )
}

const NavItemWrapper = styled.li<{ isActive: boolean }>`
  padding: 1rem 2rem 1rem 0;

  .navLink-title {
    color: ${({ theme, isActive }) =>
      isActive ? theme.fontColor : 'darkGray'};
    font-size: 1.2rem;
    letter-spacing: 0.3rem;

    &:hover {
      color: ${({ theme }) => theme.fontColor};
    }
  }
`

export default NavItem
