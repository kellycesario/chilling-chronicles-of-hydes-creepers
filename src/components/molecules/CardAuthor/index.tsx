import { Headings } from '@/components/atoms/Headings'
import { Icon } from '@/components/atoms/Icon'
import { Text } from '@/components/atoms/Text'
import Image from 'next/image'
import styles from './styles.module.scss'

type CardAuthorProps = {
  alt: string
  description: string
  name: string
  picture: string
  firstIcon: string
  secondIcon: string
  firstHref: string
  secondHref: string
}

export const CardAuthor = ({
  alt,
  description,
  name,
  picture,
  firstIcon,
  secondIcon,
  firstHref,
  secondHref,
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
          href={firstHref}
          className={styles.card__icon}
          aria-label={`connect with me in ${firstIcon}`}
        >
          <Icon icon={firstIcon}  />
        </a>
        <a
          href={secondHref}
          className={styles.card__icon}
          aria-label={`connect with me in ${secondIcon}`}
        >
          <Icon icon={secondIcon}  />
        </a>
      </div>
    </article>
  )
}
