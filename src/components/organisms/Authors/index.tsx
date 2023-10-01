'use client'

import { Headings } from '@/components/atoms/Headings'
import { CardAuthor } from '@/components/molecules/CardAuthor'
import authors from '@/data/authors.json'
import styles from './styles.module.scss'

export const Authors = () => {
  return (
    <section className={styles.authors}>
      <Headings align='center' children='Us, indeed' color='purple' level='3' />
      <div className={styles.authors__container}>
        {authors.map((item, index) => (
          <CardAuthor
            key={index}
            alt={item.alt}
            description={item.description}
            name={item.name}
            picture={item.picture}
            firstIcon={item.firstIcon}
            secondIcon={item.secondIcon}
            firstHref={item.firstHref}
            secondHref={item.secondHref}
          />
        ))}
      </div>
    </section>
  )
}
