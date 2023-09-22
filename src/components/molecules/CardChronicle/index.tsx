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
  const classList = [styles.card, styles[`card--${size}`]]

  const processedPicture =
    typeof picture === 'function' ? getProcessedPicture(picture) : picture

  const background = {
    backgroundImage: `url(${processedPicture})`,
  }

  const characterLimit = size === 'large' ? 60 : size === '' ? 30 : 33

  const sub = description ? limitCharacters(description, characterLimit) : ''

  return (
    <Link
      href={`/chilling-blog/${slug}`}
      aria-label={`checkout the ${lead} chronicle`}
    >
      <article className={classList.join(' ')} style={background}>
        <div className={styles.card__container}>
          <Headings align='left' children={lead} color='white' level='3' />
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
