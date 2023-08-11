import { Headings } from '@/components/atoms/Headings'
import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import Image from 'next/image'
import styles from './styles.module.scss'

type CardAuthorProps = {
  alt: string
  description: string
  discord: string
  linkedin: string
  name: string
  picture: string
}

export const CardAuthor = ({
  alt,
  description,
  discord,
  linkedin,
  name,
  picture,
}: CardAuthorProps) => {
  return (
    <article className={styles.card}>
      <Image
        src={picture}
        alt={alt}
        width={500}
        height={250}
        className={styles.card__picture}
      />
      <Headings align='center' color='black' level='4' children={name} />
      <Text align='left' color='black' children={description} />
      <div className={styles.card__container}>
        <a
          href={discord}
          className={styles.card__icon}
          aria-label='join me in discord'
        >
          <Icon icon='discord' />
        </a>
        <a
          href={linkedin}
          className={styles.card__icon}
          aria-label='connect with me in linkedin'
        >
          <Icon icon='linkedin' />
        </a>
      </div>
    </article>
  )
}
