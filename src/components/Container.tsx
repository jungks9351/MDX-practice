import React from 'react'
import styled from 'styled-components'

interface CotinerProps {
  children: JSX.Element | JSX.Element[]
}

const Continer = ({ children }: CotinerProps) => {
  return <ContainerWrapper>{children}</ContainerWrapper>
}

const ContainerWrapper = styled.div`
  height: 100vh;

  background-color: ${({ theme }) => theme.bgColors.main};
`

export default Continer
