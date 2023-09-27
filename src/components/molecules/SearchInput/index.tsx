'use client'

import { useEffect, useState } from 'react'
import { Input } from '../Input'
import styles from './styles.module.scss'

type SearchProps = {
  onSearch: (query: string) => void
}

export const SearchInput = ({ onSearch }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSearch(searchQuery)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    onSearch(searchQuery)
  }, [searchQuery])

  return (
    <form className={styles.search}>
      <Input
        icon='search'
        id=''
        label='What do you dare to search?'
        placeholder='Nightmare quest'
        type='text'
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
    </form>
  )
}
