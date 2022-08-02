import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import styled from 'styled-components'

import useMount from '@hooks/useMount'

interface ModalProps {
  children: JSX.Element | JSX.Element[]
  openModal: boolean
}

const Modal = ({ children, openModal }: ModalProps) => {
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
            <div id="modal-root">
              <ModalOverlay openModal={openModal}>{children}</ModalOverlay>
            </div>,
            document.getElementById('__next'),
          )
        : null}
    </>
  )
}

const ModalOverlay = styled.div<{ openModal: boolean }>`
  display: ${({ openModal }) => (openModal ? 'block' : 'none')};
  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 200;
`

export default Modal
