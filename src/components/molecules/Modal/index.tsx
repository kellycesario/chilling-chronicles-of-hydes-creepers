'use client'

import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

export const Modal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        setIsVisible(false)
      }
    }

    const handleOutsideClick = (event) => {
      if (!event.target.closest(`.${styles.modal}`)) {
        setIsVisible(false)
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const handleCloseModal = () => {
    setIsVisible(false)
    if (onClose) {
      onClose()
    }
  }

  return isVisible ? (
    <article className={styles.modal}>
      <div className={styles.modal__container}>
        <Image
          src='/ghost.png'
          alt='ghost booing'
          width={250}
          height={250}
          className={styles.modal__image}
        />
        <Text align='' children='Thank you for your message' />
        <Button
          className={styles.modal__button}
          label='Close'
          level='primary'
          onClick={handleCloseModal}
        />
      </div>
    </article>
  ) : null
}
