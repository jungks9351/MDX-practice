import ReactDOM from 'react-dom'

import { useEffect } from 'react'

import useMount from '@hooks/useMount'
import styled from 'styled-components'

interface ModalProps {
  children: JSX.Element | JSX.Element[]
  open: boolean
}

const Modal = ({ children, open }: ModalProps) => {
  const isMount = useMount()

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = ''
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    }
  }, [])
  return (
    <>
      {isMount
        ? ReactDOM.createPortal(
            <ModalOverlay open={open}>{children}</ModalOverlay>,
            document.getElementById('__next'),
          )
        : null}
    </>
  )
}

const ModalOverlay = styled.div<{ open: boolean }>`
  transition: display 1s;
  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 200;
`

export default Modal
