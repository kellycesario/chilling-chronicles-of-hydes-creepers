'use client'

import { Button } from '@/components/atoms/Button'
import { Headings } from '@/components/atoms/Headings'
import { Text } from '@/components/atoms/Text'
import { CardChronicle } from '@/components/molecules/CardChronicle'
import { Pagination } from '@/components/molecules/Pagination'
import { SearchInput } from '@/components/molecules/SearchInput'
import { Category, Chronicle } from '@/contentful/chroniclePosts'
import { getProcessedPicture } from '@/utils/formatImage'
import { usePathname } from 'next/navigation'
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
  category?: Category | Category[]
  selectedCategory?: string
  setSelectedCategory?: (category: string) => void
}

export const CardsWrapper = ({
  numCardsMobile,
  numCardsTablet,
  numCardsDesktop,
  showButton,
  chronicle,
  selectedCategory,
}: CardsWrapperProps) => {
  const pathname = usePathname()
  const isChillingBlogPage = pathname === '/chilling-blog'

  const isMobile = useMediaQuery({ maxWidth: 743 })
  const isTablet = useMediaQuery({ maxWidth: 1199 })
  const isDesktop = useMediaQuery({ minWidth: 1200 })

  const [searchText, setSearchText] = useState('')
  const [filteredChronicles, setFilteredChronicles] = useState<
    Partial<Chronicle>[]
  >([])
  const [currentPage, setCurrentPage] = useState(1)

  const handleSearch = (query: string) => {
    setSearchText(query)
  }

  useEffect(() => {
    let filtered: Partial<Chronicle>[] = chronicle ? [...chronicle] : []

    if (searchText) {
      const lowerCaseQuery = searchText.toLowerCase()
      filtered = filtered.filter((item) => {
        let category = ''
        if (
          typeof item.category === 'string' ||
          item.category instanceof String
        ) {
          category = item.category.toString().toLowerCase()
        }

        const lead = item.lead || ''
        const reviewer = item.reviewer || ''
        const description = item.description || ''
        const headline = item.headline || ''

        return (
          lead.toLowerCase().includes(lowerCaseQuery) ||
          reviewer.toLowerCase().includes(lowerCaseQuery) ||
          description.toLowerCase().includes(lowerCaseQuery) ||
          headline.toLowerCase().includes(lowerCaseQuery) ||
          category.includes(lowerCaseQuery)
        )
      })
    }

    setFilteredChronicles(filtered)
  }, [searchText, selectedCategory, chronicle])

  const cardsPerPage =
    isMobile || isTablet
      ? numCardsMobile
      : isDesktop
      ? numCardsDesktop
      : numCardsTablet
  const indexOfLastCard = currentPage * cardsPerPage
  const indexOfFirstCard = indexOfLastCard - cardsPerPage
  const currentCards = filteredChronicles?.slice(
    indexOfFirstCard,
    indexOfLastCard
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const renderedCards = currentCards
    ?.filter((item) => !selectedCategory || item.category === selectedCategory)
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
    })

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
          {renderedCards &&
            renderedCards
              .slice(0, 2)
              .filter(
                (card) =>
                  !selectedCategory || card.props.category === selectedCategory
              )}
        </article>

        <article className={styles.cards__additionalItems}>
          {renderedCards &&
            renderedCards
              .slice(2, cardsPerPage)
              .filter(
                (card) =>
                  !selectedCategory || card.props.category === selectedCategory
              )}
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

        {isChillingBlogPage && (
          <Pagination
            totalPages={Math.ceil(filteredChronicles?.length / cardsPerPage)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  )
}
