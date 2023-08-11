import { Icon } from '@/components/atoms/Icon'
import styles from './styles.module.scss'

type ArticleQuoteProps = {
  emphasis: string
  quote: string
}
export const ArticleQuote = ({ emphasis, quote }: ArticleQuoteProps) => {
  return (
    <article className={styles.articleQuote}>
      <Icon icon='quote' fill='#765BA8' />
      <span className={styles.articleQuote__text}>
        {quote}
        <strong className={styles.articleQuote__emphasis}>{emphasis}</strong>
      </span>
    </article>
  )
}
