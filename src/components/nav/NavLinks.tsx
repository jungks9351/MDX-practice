import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import navlinks from '../../data/navlinks'

const NavLinks = () => {
  const router = useRouter()

  return (
    <nav>
      {navlinks.map((navlink) => (
        <Link key={navlink.title} href={navlink.link}>
          <NavButton isActive={navlink.link === router.pathname ? true : false}>
            {navlink.title}
          </NavButton>
        </Link>
      ))}
    </nav>
  )
}

const NavButton = styled.button<{ isActive: boolean }>`
  padding: 1rem 2rem 1rem 0;

  color: ${({ theme, isActive }) => (isActive ? theme.fontColor : 'darkGray')};
  font-size: 1.8rem;
  letter-spacing: 0.3rem;

  &:hover {
    color: ${({ theme }) => theme.fontColor};
  }
`

export default NavLinks
