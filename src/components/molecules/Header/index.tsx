import { Icon } from '@/components/atoms/Icon'
import { LinkItem } from '@/components/atoms/LinkItem'
import { Logo } from '@/components/ions/Logo'
import navigation from '@/data/navigation.json'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  return (
    <header className={styles.header}>
      {!isMenuOpen && <Logo />}
      <nav className={styles.header__navigation}>
        <ul
          className={` ${
            isMenuOpen ? styles.header__open : styles.header__closed
          }`}
          role='menu'
          tabIndex={isMenuOpen ? 0 : -1}
        >
          {navigation.map((item, index) => (
            <LinkItem key={index} children={item.children} href={item.href} />
          ))}
        </ul>

        <button
          className={styles.header__toggle}
          aria-label='Toggle Menu'
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <Icon icon={isMenuOpen ? 'close' : 'menu'} />
        </button>
      </nav>
    </header>
  )
}
