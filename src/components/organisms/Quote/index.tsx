import { Text } from '@/components/atoms/Text'
import styles from './styles.module.scss'

export const Quote = () => {
  return (
    <section className={styles.quote}>
      <svg width='32' height='32' viewBox='0 0 32 32' fill='burgundy'>
        <use xlinkHref='left' href='left' />
      </svg>
      <Text align='center' children='lorem' color='black' />
      <svg width='32' height='32' viewBox='0 0 32 32' fill='burgundy'>
        <use xlinkHref='right' href='right' />
      </svg>
    </section>
  )
}
