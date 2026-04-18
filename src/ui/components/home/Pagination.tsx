import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react"

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}


function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) {
    return null
  }
  return (
    <div className="flex flex-row items-center justify-center gap-5">
        <button 
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="flex flex-row items-center justify-center gap-2 bg-yellow-500 text-white px-4 py-1 text-md font-bold rounded-l-2xl"
          >
            <ArrowLeftIcon size={18}/>
            PREV
        </button>

        <span>
            Page <em className="text-yellow-700">{currentPage}</em> of <em>{totalPages}</em>
        </span>

        <button 
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className="flex flex-row items-center justify-center gap-2 bg-yellow-500 text-white px-4 py-1 text-md font-bold rounded-r-2xl"
            >
              NEXT
              <ArrowRightIcon size={18}/>
        </button>
    </div>
  )
}

export default Pagination