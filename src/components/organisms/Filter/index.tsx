import { FilterItem } from '@/components/molecules/FilterItem'
import { Select } from '@/components/molecules/Select'
import { useEffect, useState } from 'react'

type FilterProps = {}

export const Filter = ({}: FilterProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile ? (
    <Select label='Search by topic' />
  ) : (
    <ul>
      <FilterItem ariaLabel='a' icon='books' children='this is a topic' />
    </ul>
  )
}
