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
  description: string
  lead: string
}

export const CardChronicle = ({
  reviewer,
  slug,
  picture,
  size,
  description,
  lead,
}: CardChronicleProps) => {
  const card = [styles.card, styles[`card--${size}`]]
  const cardImage = [styles.card__image, styles[`card__image--${size}`]]

  const processedPicture =
    typeof picture === 'function' ? getProcessedPicture(picture) : picture

  const background = {
    backgroundImage: `url(${processedPicture})`,
  }

  const characterLimit = size === 'large' ? 72 : size === '' ? 45 : 48

  const sub = description ? limitCharacters(description, characterLimit) : ''

  const title = limitCharacters(lead, 30)

  return (
    <Link
      href={`/chilling-blog/${slug}`}
      aria-label={lead}
      className={styles.card__link}
    >
      <article className={card.join(' ')}>
        <div className={cardImage.join(' ')} style={background}></div>
        <div className={styles.card__container}>
          <Headings align='left' children={title} color='white' level='3' />
          <Text align='left' children={sub} color='white' />
          <div className={styles.card__author}>
            <Icon icon='ghost' fill='#FDFFFF' />
            <Text align='left' children={reviewer} color='white' />
          </div>
        </div>
      </article>
    </Link>
  )
}
