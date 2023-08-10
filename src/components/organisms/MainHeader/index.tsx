import { Header } from '@/components/molecules/Header'
import { Hero } from '@/components/molecules/Hero'
import styles from './styles.module.scss'

type MainHeaderProps = {
  image: string
}

export const MainHeader = ({ image }: MainHeaderProps) => {
  return (
    <section className={styles.mainHeader}>
      <Header />
      <Hero image={image} />
    </section>
  )
}
