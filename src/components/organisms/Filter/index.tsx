'use client'

import { FilterItem } from '@/components/molecules/FilterItem'
import { Select } from '@/components/molecules/Select'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import topics from '@/data/topics.json'

export const Filter = () => {
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
    <Select image='/arrow.svg' label='Search by topic' />
  ) : (
    <ul className={styles.filter}>
      {topics.map((item, index) => (
        <FilterItem
          key={index}
          icon={item.icon}
          label={item.label}
          value={item.value}
        />
      ))}
    </ul>
  )
}
