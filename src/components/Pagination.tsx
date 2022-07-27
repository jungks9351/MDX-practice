import styled, { css } from 'styled-components'

const Pagination = ({ page, lastPage, handlePrevBtn, handleNextBtn }) => {
  return (
    <PaginationWrapper>
      <PagenationBtnWrapper isVisible={page !== 1 ? true : false}>
        <button onClick={handlePrevBtn}>Prev</button>
      </PagenationBtnWrapper>
      <PaginationInfo>
        {page} of {lastPage}
      </PaginationInfo>
      <PagenationBtnWrapper isVisible={page !== lastPage ? true : false}>
        <button onClick={handleNextBtn}>Next</button>
      </PagenationBtnWrapper>
    </PaginationWrapper>
  )
}

const PaginationWrapper = styled.nav`
  padding-bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 1.6rem;
`

const PaginationInfo = styled.div`
  width: 80%;
  text-align: center;
`

const PagenationBtnWrapper = styled.div<{ isVisible: boolean }>`
  width: 10%;
  letter-spacing: 0.3rem;
  :hover {
    color: #1340c1;
  }
  ${({ isVisible }) =>
    !isVisible &&
    css`
      button {
        display: none;
      }
    `};
`

export default Pagination
