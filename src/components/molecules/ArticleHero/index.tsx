import { Headings } from '@/components/atoms/Headings'
import { Text } from '@/components/atoms/Text'
import { Share } from '@/components/molecules/Share'
import Image from 'next/image'
import styles from './styles.module.scss'

type ArticleHeroProps = {
  alt: string
  lead: string
  picture: string
  description: string
}

export const ArticleHero = ({
  alt,
  lead,
  picture,
  description,
}: ArticleHeroProps) => {
  return (
    <article className={styles.hero}>
      <Headings align='left' children={lead} color='black' level='1' />
      <div className={styles.hero__pictureContainer}>
        <Image
          src={picture}
          alt={alt}
          width={1080}
          height={705}
          className={styles.hero__picture}
        />
      </div>
      <div className={styles.hero__container}>
        <Text align='left' children={description} />
        <Share />
      </div>
    </article>
  )
}
