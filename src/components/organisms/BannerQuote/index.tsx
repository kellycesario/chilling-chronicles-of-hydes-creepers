import { Tag } from '@/components/atoms/Tag'
import { Text } from '@/components/atoms/Text'
import quoteData from '@/data/quotes.json'
import { useState } from 'react'
import styles from './styles.module.scss'

type BannerQuoteProps = {
  image: string
}

export const BannerQuote = ({ image }: BannerQuoteProps) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const totalQuotes = quoteData.length

  const handlePrevQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === 0 ? totalQuotes - 1 : prevIndex - 1
    )
  }

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === totalQuotes - 1 ? 0 : prevIndex + 1
    )
  }

  const currentQuote = quoteData[currentQuoteIndex]

  const background = {
    backgroundImage: `url(${image})`,
  }

  return (
    <section className={styles.quote} style={background}>
      <article>
        <button
          className={styles.quote__button}
          onClick={handlePrevQuote}
          aria-label='Previous Quote'
        >
          <svg width='32' height='32' viewBox='0 0 32 32'>
            <use xlinkHref='#left' href='#left' />
          </svg>
        </button>
      </article>
      <article className={styles.quote__container}>
        <svg width='32' height='32' viewBox='0 0 32 32'>
          <use xlinkHref='#quote-02' href='#quote-02' />
        </svg>
        <Text align='center' children={currentQuote.quote} color='black' />
        <Tag author={currentQuote.author} />
      </article>
      <article>
        <button
          className={styles.quote__button}
          onClick={handleNextQuote}
          aria-label='Next Quote'
        >
          <svg width='32' height='32' viewBox='0 0 32 32'>
            <use xlinkHref='#right' href='#right' />
          </svg>
        </button>
      </article>
    </section>
  )
}
