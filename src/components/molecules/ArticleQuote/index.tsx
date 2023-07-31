import styles from './styles.module.scss'

type ArticleQuoteProps = {
  emphasis: string
  quote: string
}
export const ArticleQuote = ({ emphasis, quote }: ArticleQuoteProps) => {
  return (
    <article className={styles.articleQuote}>
      <svg width='38' height='25' viewBox='0 0 38 25' fill='#765BA8'>
        <use xlinkHref='#quote' href='#quote' />
      </svg>
      <span className={styles.articleQuote__text}>
        {quote}
        <strong className={styles.articleQuote__emphasis}>{emphasis}</strong>
      </span>
    </article>
  )
}
