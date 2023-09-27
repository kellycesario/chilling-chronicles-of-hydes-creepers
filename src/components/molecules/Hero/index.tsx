import { Headings } from '@/components/atoms/Headings'
import { Text } from '@/components/atoms/Text'
import Image from 'next/image'
import styles from './styles.module.scss'

type HeroProps = {
  image: string
}

export const Hero = ({ image }: HeroProps) => {
  return (
    <section className={styles.hero}>
      <article className={styles.hero__headings}>
        <Headings
          align='left'
          children="Chilling Chronicles of Hyde's Creepers"
          color='burgundy'
          level='1'
        />
        <Text
          align='left'
          children="You'll be very welcome and equally scared on our spooky blog"
          color='burgundy'
        />
      </article>
      <article className={styles.hero__container}>
        <Image
          src={image}
          alt=''
          width={500}
          height={500}
          className={styles.hero__picture}
          priority={true}	
        />
      </article>
    </section>
  )
}
