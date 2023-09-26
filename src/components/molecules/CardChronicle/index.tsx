import { Headings } from '@/components/atoms/Headings'
import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import { getProcessedPicture } from '@/utils/formatImage'
import { limitCharacters } from '@/utils/limitCharacters.ts'
import { Asset, ChainModifiers } from 'contentful'
import Link from 'next/link'
import styles from './styles.module.scss'

type Picture =
  | string
  | Asset<ChainModifiers, string>
  | (() => Asset<ChainModifiers, string>)

type CardChronicleProps = {
  reviewer: string
  slug?: string
  picture: Picture
  size?: string
  headline: string
  lead: string
}

export const CardChronicle = ({
  reviewer,
  slug,
  picture,
  size,
  headline,
  lead
}: CardChronicleProps) => {
  const card = [styles.card, styles[`card--${size}`]].join(' ')
  const cardImage = [styles.card__image, styles[`card__image--${size}`]].join(' ')

  const processedPicture =
    typeof picture === 'function' ? getProcessedPicture(picture) : picture

  const background = {
    backgroundImage: `url(${processedPicture})`,
  }

  const title = lead ? limitCharacters(lead, 37) : ''

  return (
    <Link
      href={`/chilling-blog/${slug}`}
      aria-label={lead}
      className={styles.card__link}
    >
      <article className={card}>
        <div className={cardImage} style={background}></div>
        <div className={styles.card__container}>
          <Headings align='left' children={headline} color='white' level='3' />
          <Text align='left' children={title} color='white' />
          <div className={styles.card__author}>
            <Icon icon='ghost' fill='#FDFFFF' />
            <Text align='left' children={reviewer} color='white' />
          </div>
        </div>
      </article>
    </Link>
  )
}
