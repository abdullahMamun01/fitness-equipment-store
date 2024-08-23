import React, { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Pagination: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const initialPage = Number(searchParams.get('page')) || 1
  const initialLimit = Number(searchParams.get('limit')) || 6

  const [page, setPage] = useState(initialPage)
  const [limit, setLimit] = useState(initialLimit)

  const maxPage = 100 // Replace with your actual max page number

  const updateSearchParams = useCallback(
    (newParams: { page?: number, limit?: number }) => {
      const updatedParams = new URLSearchParams(searchParams.toString())
      if (newParams.page !== undefined) {
        updatedParams.set('page', newParams.page.toString())
      }
      if (newParams.limit !== undefined) {
        updatedParams.set('limit', newParams.limit.toString())
      }
      setSearchParams(updatedParams)
    },
    [searchParams, setSearchParams]
  )

  useEffect(() => {
    updateSearchParams({ page, limit })
  }, [page, limit, updateSearchParams])

  const handlePrevious = useCallback(() => {
    if (page > 1) setPage((prevPage) => prevPage - 1)
  }, [page])

  const handleNext = useCallback(() => {
    if (page < maxPage) setPage((prevPage) => prevPage + 1)
  }, [page, maxPage])

  const handlePageChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    const value = Number(e.target.value)
    if (value >= 1 && value <= maxPage) {
      setPage(value)
    }
  }, [maxPage])

  const handleLimitChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>((e) => {
    setLimit(Number(e.target.value))
  }, [])

  return (
    <div className="w-full my-5">
      <div className="px-4 md:p-0 md:w-4/5 flex justify-between items-center gap-2 mx-auto">
        <Button
          onClick={handlePrevious}
          disabled={page === 1}
          className="bg-primary hover:bg-primary-dark text-white flex items-center px-2 py-1 rounded"
        >
          <ArrowLeft className="mr-1" />
          Prev
        </Button>

        <div className="flex items-center gap-1  max-sm:text-sm">
          <span className="text-primary">Page</span>
          <input
            type="number"
            value={page}
            onChange={handlePageChange}
            className="w-12 bg-white text-primary text-center border border-gray-300 rounded py-1"
            min={1}
            max={maxPage}
            aria-label="Page number"
          />
          <span className="text-primary">of {maxPage}</span>
        </div>

        <div className="flex items-center gap-1 px-2 md:p-0 max-sm:text-sm">
          <span className="text-primary">Show</span>
          <select
            value={limit}
            onChange={handleLimitChange}
            className="bg-white text-primary border border-gray-300 rounded py-1  max-sm:text-sm"
            aria-label="Items per page "
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
          <span className="text-primary  max-sm:text-sm">/page</span>
        </div>

        <Button
          onClick={handleNext}
          disabled={page === maxPage}
          className="bg-primary hover:bg-primary-dark text-white flex items-center px-2 py-1 rounded"
        >
          Next
          <ArrowRight className="ml-1" />
        </Button>
      </div>
    </div>
  )
}

export default Pagination
