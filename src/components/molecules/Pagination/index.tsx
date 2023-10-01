import { Icon } from '@/components/atoms/Icon'
import styles from './styles.module.scss'

type PaginationProps = {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage)
    }
  }

  const isPreviousDisabled = currentPage === 1
  const isNextDisabled = currentPage === totalPages

  const previousIconFill = isPreviousDisabled ? '#d0d0ff' : '#765ba8'
  const nextIconFill = isNextDisabled ? '#d0d0ff' : '#765ba8'

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        aria-label='previous'
        className={`${styles.pagination__button} ${
          isPreviousDisabled ? styles.disabled : ''
        }`}
        disabled={isPreviousDisabled}
      >
        <Icon icon='arrow-left' fill={previousIconFill} />
      </button>

      <div
        aria-label={`${currentPage} of ${totalPages}`}
        className={styles.pagination__current}
      >
        {currentPage}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        aria-label='next'
        className={`${styles.pagination__button} ${
          isNextDisabled ? styles.disabled : ''
        }`}
        disabled={isNextDisabled}
      >
        <Icon icon='arrow-right' fill={nextIconFill} />
      </button>
    </div>
  )
}
