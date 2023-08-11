import { Headings } from '@/components/atoms/Headings'
import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import { limitCharacters } from '@/utils/limitCharacters.js'
import Link from 'next/link'
import styles from './styles.module.scss'

type CardChronicleProps = {
  ariaLabel: string
  author: string
  href?: string
  image: string
  size: string
  subtitle: string
  title: string
}

export const CardChronicle = ({
  ariaLabel,
  author,
  href,
  image,
  size,
  subtitle,
  title,
}: CardChronicleProps) => {
  const classList = [styles[`card`], styles[`card--${size}`]]
  const background = {
    backgroundImage: `url(${image})`,
  }
  const characterLimit = size === 'large' ? 60 : size === '' ? 30 : 33
  const sub = limitCharacters(subtitle, characterLimit)

  return (
    <Link href={href} aria-label={ariaLabel}>
      <article className={classList.join(' ')} style={background}>
        <div className={styles.card__container}>
          <Headings align='left' children={title} color='white' level='3' />
          <Text align='left' children={sub} color='white' />
          <div className={styles.card__author}>
            <Icon icon='ghost' fill='#FDFFFF' />
            <Text align='left' children={author} color='white' />
          </div>
        </div>
      </article>
    </Link>
  )
}
