import { LinkItem } from '@/components/atoms/LinkItem'
import { Text } from '@/components/atoms/Text'
import navigation from '@/data/navigation.json'
import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.footer__list}>
          {navigation.map((item, index) => (
            <LinkItem key={index} children={item.children} href={item.href} />
          ))}
        </ul>
      </nav>

      <div className={styles.footer__credits}>
        <Text align='left' children='Made with' color='black' />
        <svg width='32' height='32' viewBox='0 0 32 32' fill='purple'>
          <use xlinkHref='#ghost' href='#ghost' />
        </svg>
        <Text align='left' children='for chilling people' color='black' />
      </div>
    </footer>
  )
}
