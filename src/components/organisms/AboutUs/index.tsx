import { Headings } from '@/components/atoms/Headings'
import { Text } from '@/components/atoms/Text'
import { AboutItem } from '@/components/molecules/AboutItem'

import styles from './styles.module.scss'

import about from '@/data/about.json'
export const AboutUs = () => {
  return (
    <section className={styles.about}>
      <article className={styles.about__headings}>
        <Headings align='left' children='About us' color='purple' level='2' />
        <Text
          align='left'
          children="From darkness emerges our project's haunted essence"
          color='black'
        />
      </article>
      <article className={styles.about__container}>
        {about.map((item, index) => (
          <AboutItem
            key={index}
            icon={item.icon}
            topic={item.topic}
            subtopic={item.subtopic}
          />
        ))}
      </article>
    </section>
  )
}
