'use client'

import { Headings } from '@/components/atoms/Headings'
import { AccordionItem } from '@/components/molecules/AccordionItem'
import accordionData from '@/utils/accordionData'
import styles from './styles.module.scss'

export const Accordion = () => {
  return (
    <section className={styles.accordion}>
      <Headings
        align='left'
        children='Whispers from the Crypt'
        color='purple'
        level='3'
      />
      <div className={styles.accordion__items}>
        {Object.entries(accordionData[0]).map(([key, value], index) => (
          <AccordionItem key={index} title={value} content={key} />
        ))}
      </div>
    </section>
  )
}
