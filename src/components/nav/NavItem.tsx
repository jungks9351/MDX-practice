import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import { NavLinkType } from '@data/navLinks'

interface NavItemProps {
  navLink: NavLinkType
  toggleOpenModal: () => void
}

const NavItem = ({ navLink, toggleOpenModal }: NavItemProps) => {
  const router = useRouter()

  return (
    <Link href={navLink.link}>
      <NavItemWrapper onClick={toggleOpenModal}>
        <NavLinkTitle
          className="navLink-title"
          isActive={navLink.link === router.pathname ? true : false}
        >
          {navLink.title}
        </NavLinkTitle>
      </NavItemWrapper>
    </Link>
  )
}

const NavItemWrapper = styled.li`
  padding: 1rem 0 1rem 1.6rem;
  border-bottom: 0.5px solid #a9adc1;
  color: ${({ theme }) => theme.fontColor.primary};
  cursor: pointer;
  :first-child {
    border-top: 0.5px solid #a9adc1;
  }
  &:hover {
    color: ${({ theme }) => theme.fontColor.text2};
    background-color: #ffffff;
  }
`

const NavLinkTitle = styled.h4<{ isActive: boolean }>`
  font-weight: 600;
  font-size: 1.8rem;
  letter-spacing: 0.3rem;
`

export default NavItem
