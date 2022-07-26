import styled from 'styled-components'

const Pagination = ({ page, lastPage, handlePrevBtn, handleNextBtn }) => {
  return (
    <PaginationWrapper>
      <PagenationBtnWrapper>
        <button onClick={handlePrevBtn}>Prev</button>
      </PagenationBtnWrapper>
      <div>
        {page} of {lastPage}
      </div>
      <PagenationBtnWrapper>
        <button onClick={handleNextBtn}>Next</button>
      </PagenationBtnWrapper>
    </PaginationWrapper>
  )
}

const PaginationWrapper = styled.nav`
  padding-bottom: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  font-size: 1.4rem;
`

const PagenationBtnWrapper = styled.div`
  letter-spacing: 0.3rem;
`

export default Pagination
