import { Headings } from '@/components/atoms/Headings'
import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import { ArticleHero } from '@/components/molecules/ArticleHero'
import { ArticleQuote } from '@/components/molecules/ArticleQuote'
import { PublicationInfo } from '@/components/molecules/PublicationInfo'
import { Share } from '@/components/molecules/Share'
import Link from 'next/link'

import styles from './styles.module.scss'

type ArticleContentProps = {
  reviewer: string
  date: string
  alt: string
  lead: string
  picture: string
  subtitle: string
  description: string
  emphasis: string
  quote: string
  firstParagraph: string
  secondParagraph: string
  thirdParagraph: string
  fourthParagraph: string
  category?: string
}

export const ArticleContent = ({
  reviewer,
  date,
  alt,
  lead,
  picture,
  subtitle,
  description,
  emphasis,
  quote,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
}: ArticleContentProps) => {
  return (
    <section className={styles.content}>
      <div className={styles.content__container}>
        <Link href='/chilling-blog' className={styles.content__link}>
          <Icon icon='arrow-left' fill='#765BA8' />
          <Text align='left' children='Return to Chilling Blog' />
        </Link>

        <PublicationInfo reviewer={reviewer} date={date} />
      </div>

      <ArticleHero
        alt={alt}
        lead={lead}
        picture={picture}
        description={description}
      />

      <Share />

      <Text align='left' children={firstParagraph} />
      <Headings align='center' children={subtitle} color='purple' level='2' />
      <Text align='left' children={secondParagraph} />
      <Text align='left' children={thirdParagraph} />
      <ArticleQuote emphasis={emphasis} quote={quote} />
      <Text align='left' children={fourthParagraph} />
    </section>
  )
}
