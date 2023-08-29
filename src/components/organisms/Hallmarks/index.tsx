import { Button } from '@/components/atoms/Button'
import { Headings } from '@/components/atoms/Headings'
import { SliderComponent } from '@/components/molecules/Slider'
import styles from './styles.module.scss'

type HallmarksProps = {
  image: String
  location?: String
}

export const Hallmarks = ({ image, location }: HallmarksProps) => {
  const background = {
    backgroundImage: `url(${image})`,
  }

  const buttonLabel = location === 'home' ? 'About us' : 'Summon us'

  return (
    <section style={background} className={styles.hallmarks}>
      <Headings level='5' align='left' children='Our hallmarks' color='white' />
      <SliderComponent />
      <article className={styles.hallmarks__container}>
        <Button
          href={location === 'home' ? '/about-us' : '/summon-us'}
          label={buttonLabel}
          level='tertiary'
          target='_self'
          isButton={false}
        />
      </article>
    </section>
  )
}
