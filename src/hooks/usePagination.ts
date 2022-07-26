import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const usePagination = (List) => {
  const router = useRouter()
  const queryPage = Number(router.query)
  const limit = 5
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit
  const lastPage = Math.ceil(List.length / 5)
  const ListPerPage = List.slice(offset, page * limit)

  const handlePrevBtn = () => {
    if (page <= 1) {
      return
    }
    setPage((prev) => prev - 1)
    router.push({
      pathname: `${router.pathname}`,
      query: { page: `${page - 1}` },
    })
  }

  const handleNextBtn = () => {
    if (page >= lastPage) {
      return
    }
    setPage((prev) => prev + 1)
    router.push({
      pathname: `${router.pathname}`,
      query: { page: `${page + 1}` },
    })
  }

  useEffect(() => {
    if (!queryPage) {
      setPage(1)
      return
    }
    setPage(queryPage)
  }, [queryPage])

  return { page, lastPage, ListPerPage, handlePrevBtn, handleNextBtn }
}

export default usePagination
