import React from 'react'
import styled from 'styled-components'

interface CotinerProps {
  children: JSX.Element | JSX.Element[]
}

const Container = ({ children }: CotinerProps) => {
  return <ContainerWrapper>{children}</ContainerWrapper>
}

const ContainerWrapper = styled.div`
  height: 100vh;
  padding: 0 1.6rem;
  margin: 0 auto;
  @media (min-width: 768px) {
    padding: 0 2.4rem;
  }
  background-color: ${({ theme }) => theme.bgColors.main};
`

export default Container
