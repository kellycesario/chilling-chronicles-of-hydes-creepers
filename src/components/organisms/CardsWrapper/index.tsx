'use client'

import { Button } from '@/components/atoms/Button'
import { Headings } from '@/components/atoms/Headings'
import { Text } from '@/components/atoms/Text'
import { CardChronicle } from '@/components/molecules/CardChronicle'
import { Chronicle } from '@/contentful/chroniclePosts'
import { getProcessedPicture } from '@/utils/formatImage'
import { useMediaQuery } from 'react-responsive'
import styles from './styles.module.scss'

type CardsWrapperProps = {
  numCardsMobile: number
  numCardsTablet: number
  numCardsDesktop: number
  showButton: boolean
  chronicle?: Pick<
    Chronicle,
    'lead' | 'reviewer' | 'picture' | 'description' | 'slug'
  >[]
}

export const CardsWrapper = ({
  numCardsMobile,
  numCardsTablet,
  numCardsDesktop,
  showButton,
  chronicle,
}: CardsWrapperProps) => {
  const isMobile = useMediaQuery({ maxWidth: 743 })
  const isTablet = useMediaQuery({ maxWidth: 1199 })
  const isDesktop = useMediaQuery({ minWidth: 1200 })

  const numCards = isMobile
    ? numCardsMobile
    : isTablet
    ? numCardsTablet
    : numCardsDesktop

  return (
    <section className={styles.cards}>
      <article className={styles.cards__text}>
        <Headings
          align='left'
          children='Our Chronicles'
          color='purple'
          level='2'
        />
        <Text
          align='left'
          children="Check out our reviews of twenty books from Edgar J Hyde's Creepers horror collection"
          color='burgundy'
        />
      </article>
      <div className={styles.cards__container}>
        <article className={styles.cards__initialItems}>
          {Array.isArray(chronicle) &&
            chronicle.slice(0, 2).map((item, index) => {
              const processedPicture = getProcessedPicture(item.picture)
              return (
                <CardChronicle
                  key={index}
                  reviewer={item.reviewer}
                  picture={processedPicture}
                  size={isDesktop && index === 0 ? 'large' : ''}
                  description={item.description}
                  lead={item.lead}
                  slug={item.slug}
                />
              )
            })}
        </article>

        <article className={styles.cards__additionalItems}>
          {Array.isArray(chronicle) &&
            chronicle.slice(2, numCards).map((item, index) => {
              const processedPicture = getProcessedPicture(item.picture)
              return (
                <CardChronicle
                  key={index}
                  reviewer={item.reviewer}
                  picture={processedPicture}
                  description={item.description}
                  lead={item.lead}
                  slug={item.slug}
                />
              )
            })}
        </article>

        <article className={styles.cards__interaction}>
          {showButton && (
            <Button
              href='/chilling-blog'
              isButton={false}
              label='View all chronicles'
              level='primary'
              target='_self'
            />
          )}
        </article>
      </div>
    </section>
  )
}
