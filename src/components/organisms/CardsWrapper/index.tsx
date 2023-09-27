'use client'

import { Button } from '@/components/atoms/Button'
import { Headings } from '@/components/atoms/Headings'
import { Text } from '@/components/atoms/Text'
import { CardChronicle } from '@/components/molecules/CardChronicle'
import { SearchInput } from '@/components/molecules/SearchInput'
import { Chronicle } from '@/contentful/chroniclePosts'
import { getProcessedPicture } from '@/utils/formatImage'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from './styles.module.scss'

type CardsWrapperProps = {
  numCardsMobile: number
  numCardsTablet: number
  numCardsDesktop: number
  showButton: boolean
  chronicle?: (Partial<Chronicle> &
    Pick<
      Chronicle,
      | 'lead'
      | 'reviewer'
      | 'picture'
      | 'description'
      | 'slug'
      | 'headline'
      | 'category'
    >)[]
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

  const [searchText, setSearchText] = useState('')
  const [filteredChronicles, setFilteredChronicles] = useState<
    Partial<Chronicle>[]
  >([])

  useEffect(() => {
    handleSearch(searchText)
  }, [searchText])

  const handleSearch = (query: string) => {
    setSearchText(query)

    if (!query) {
      setFilteredChronicles(chronicle || [])
      return
    }

    const lowerCaseQuery = query.toLowerCase()
    const filtered = (chronicle || []).filter(
      (item) =>
        item.lead.toLowerCase().includes(lowerCaseQuery) ||
        item.reviewer.toLowerCase().includes(lowerCaseQuery) ||
        item.description.toLowerCase().includes(lowerCaseQuery) ||
        item.headline.toLowerCase().includes(lowerCaseQuery)
    )

    setFilteredChronicles(filtered)
  }

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

      <article className={styles.cards__search}>
        <SearchInput onSearch={handleSearch} />
      </article>

      <div className={styles.cards__container}>
        <article className={styles.cards__initialItems}>
          {(searchText === '' ? chronicle : filteredChronicles)
            .slice(0, 2)
            .map((item, index) => {
              const processedPicture = getProcessedPicture(item.picture)
              return (
                <CardChronicle
                  key={index}
                  reviewer={item.reviewer}
                  picture={processedPicture}
                  size={isDesktop && index === 0 ? 'large' : ''}
                  lead={item.lead}
                  headline={item.headline}
                  slug={item.slug}
                />
              )
            })}
        </article>

        <article className={styles.cards__additionalItems}>
          {(searchText === '' ? chronicle : filteredChronicles)
            .slice(2, numCards)
            .map((item, index) => {
              const processedPicture = getProcessedPicture(item.picture)
              return (
                <CardChronicle
                  key={index}
                  reviewer={item.reviewer}
                  picture={processedPicture}
                  lead={item.lead}
                  headline={item.headline}
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
